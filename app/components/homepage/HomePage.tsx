"use client";

import { menu } from "@/app/constants/menuitems";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/locales/translator";
import { CategoryKey } from "@/app/locales/translations";
import Image from "next/image";

const HomePage = () => {
  const router = useRouter();
  const { tCategory } = useTranslation();

  return (
    <div className="p-4 grid grid-cols-2 gap-4 min-h-screen bg-black">
      {menu.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push(`/category/${category.id}`)}
          className="cursor-pointer rounded-2xl bg-black border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors shadow-[0_2px_12px_rgba(0,0,0,0.4)] overflow-hidden"
        >
          <div className="relative w-full h-32">
            <Image
              src={category.image || "/placeholder.jpg"}
              alt={category.nameKey}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-3">
            <h2 className="text-base font-semibold text-center text-white tracking-wide">
              {tCategory(category.id as CategoryKey)}
            </h2>

            <p className="text-xs text-white/40 text-center mt-1">
              აირჩიე კატეგორია
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomePage;
