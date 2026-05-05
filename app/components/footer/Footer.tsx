"use client";
import { useTranslation } from "@/app/locales/translator";
import { useCartStore } from "@/zustand";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const items = useCartStore((state) => state.items);

  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const { tUI } = useTranslation();
  return (
    <footer className="w-full sticky bottom-0 left-0 bg-black border-t border-[#C9A84C]/20 shadow-[0_-2px_20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between px-6 py-3">
        <button
          onClick={() => router.push("/")}
          className="text-sm font-medium tracking-widest text-[#C9A84C] hover:text-[#E8C97A]"
        >
          Home
        </button>

        <div className="text-center">
          <p className="text-xs text-[#C9A84C]/50 tracking-wider">
            {totalCount} {tUI("product")}
          </p>
          <p className="font-bold bg-gradient-to-b from-[#E8C97A] via-[#C9A84C] to-[#7A5C00] bg-clip-text text-transparent">
            {totalPrice}₾
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
