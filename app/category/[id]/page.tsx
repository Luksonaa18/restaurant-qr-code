"use client";

import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { menu } from "@/app/constants/menuitems";
import { useCartStore } from "@/zustand";

import { useParams } from "next/navigation";
import { useTranslation } from "@/app/translator";
import { ItemKey } from "@/app/locales/translations";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const params = useParams();
  const addToCart = useCartStore((s) => s.addToCart);
  const { tItem } = useTranslation();

  const category = menu.find((c) => c.id === params.id);

  if (!category)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white tracking-widest">
        Not found
      </div>
    );

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="p-4 space-y-3">
        {category.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.4)] p-3 flex gap-4 items-center"
          >
            <div className="w-24 h-24 bg-[#120C06] border border-white rounded-xl shrink-0" />

            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-base text-white tracking-wide">
                {tItem(item.id as ItemKey)}
              </h2>

              {item.descriptionKey && (
                <p className="text-sm text-white/50 line-clamp-2 mt-0.5">
                  {item.descriptionKey}
                </p>
              )}

              <p className="mt-1 font-semibold text-white/80">{item.price}₾</p>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                addToCart({
                  id: item.id,
                  nameKey: item.id,
                  price: item.price,
                })
              }
              className="flex-shrink-0 bg-gradient-to-b text-white border border-white bg-black text-sm  font-bold px-4 py-2 rounded-xl  tracking-wider hover:brightness-110 transition-all"
            >
              +
            </motion.button>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
