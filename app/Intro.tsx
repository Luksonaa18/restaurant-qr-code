"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Intro = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const welcomeRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });

    gsap.set([line1Ref.current, line2Ref.current], { scaleX: 0, opacity: 0 });
    gsap.set(dotsRef.current, { opacity: 0 });

    tl.fromTo(
      logoRef.current,
      { x: "-100vw", rotation: -360, opacity: 0 },
      { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "power3.out" },
    )

      .fromTo(
        welcomeRef.current,
        { y: 3, opacity: 0, letterSpacing: "0.4em" },
        {
          y: 0,
          opacity: 1,
          letterSpacing: "0.15em",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3",
      )

      .fromTo(
        nameRef.current,
        { x: 80, opacity: 0, skewX: 10 },
        { x: 0, opacity: 1, skewX: 0, duration: 0.7, ease: "back.out(1.7)" },
        "-=0.2",
      )

      .to(
        [line1Ref.current, line2Ref.current],
        { scaleX: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2",
      )

      .to(dotsRef.current, { opacity: 1, duration: 0.3 }, "-=0.1")

      .to({}, { duration: 0.8 })

      // exit
      .to(logoRef.current, {
        scale: 1.4,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      })
      .to(
        welcomeRef.current,
        { y: -400, opacity: 0, duration: 0.35, ease: "power2.in" },
        "<",
      )
      .to(
        nameRef.current,
        { y: 400, opacity: 0, duration: 0.35, ease: "power2.in" },
        "<",
      )
      .to(
        [line1Ref.current, line2Ref.current, dotsRef.current],
        { opacity: 0, duration: 0.2 },
        "<",
      )

      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power1.inOut",
          onComplete: () => {
            if (overlayRef.current) overlayRef.current.style.display = "none";
          },
        },
        "-=0.15",
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4"
      style={{
        background: "#000000",
      }}
    >
      <Image
        ref={logoRef}
        width={120}
        height={120}
        src="/logo.jpeg"
        alt="logo"
        className="rounded-full ring-2 ring-[#C9A84C]/30 shadow-[0_0_40px_rgba(201,168,76,0.15)]"
        style={{ opacity: 0 }}
      />

      <div className="flex flex-col items-center leading-tight select-none gap-1">
        <span
          ref={welcomeRef}
          className="text-white/50 text-xs font-light uppercase tracking-[0.15em]"
          style={{ opacity: 0 }}
        >
          Welcome to
        </span>

        <span
          ref={nameRef}
          className="text-5xl font-bold tracking-wide"
          style={{
            opacity: 0,
            color: "gold",
          }}
        >
          MARINA
        </span>

        <div className="flex items-center gap-2 mt-2 w-48">
          <div
            ref={line1Ref}
            className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A84C]"
            style={{ transformOrigin: "right" }}
          />
          <div ref={dotsRef} className="text-[#C9A84C] text-xs">
            ✦
          </div>
          <div
            ref={line2Ref}
            className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A84C]"
            style={{ transformOrigin: "left" }}
          />
        </div>

        <span className="text-[#C9A84C]/50 text-[10px] tracking-[0.3em] uppercase mt-1">
          Restaurant
        </span>
      </div>
    </div>
  );
};

export default Intro;
