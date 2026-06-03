"use client";

import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { menu } from "@/app/constants/menuitems";
import { useCartStore } from "@/zustand";

import { useParams } from "next/navigation";
import { useTranslation } from "@/app/locales/translator";
import { ItemKey } from "@/app/locales/translations";
import { motion } from "framer-motion";
import Image from "next/image";

const CategoryPage = () => {
  const params = useParams();
  const addToCart = useCartStore((s) => s.addToCart);
  const { tItem } = useTranslation();

  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

const category = menu.find((c) => String(c.id) === id);
if (!category || !category.items) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white tracking-widest">
      Not found
    </div>
  );
}

  return (
    <div className="min-h-screen bg-black">
      <Header />

      
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {category.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.05 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-colors rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.4)] p-3 flex flex-col gap-3"
          >
            
          {item.image !== null && 
           <Image
              src={item.image}
              width={400}
              height={250}
              alt={item.id}
              className="rounded-lg w-full h-40 object-cover"
            />
          }

            
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-base text-white tracking-wide">
                {tItem(item.id as ItemKey)}
              </h2>

              {item.descriptionKey && (
                <p className="text-sm text-white/50 line-clamp-3">
                  {item.descriptionKey}
                </p>
              )}

              <p className="mt-1 font-semibold text-white/80">
                {item.price}₾
              </p>
            </div>

            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                addToCart({
                  id: item.id,
                  nameKey: item.id,
                  price: item.price ?? 0,
                })
              }
              className="w-full bg-black border border-white text-white text-2xl font-bold py-2 rounded-xl tracking-wider hover:brightness-110 transition-all"
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