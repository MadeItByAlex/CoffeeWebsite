import Image from "next/image";
import coffeeCup from "/public/Images/coffee1.png";
import beans from "/public/Images/beans.png";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative bg-black min-h-screen text-beige p-8 overflow-hidden"
    >
      {/* Text Content */}
      <div className="relative z-10 max-w-full">
        <h1 className="text-white ml-20 text-3xl mt-10 font-bold mb-4">MVST.</h1>
        <h2 className="text-[150px] font-bold text-[#EEC58C] leading-tight relative z-10">
          Coffee <br /> Lovers
        </h2>
      </div>

      {/* Coffee Beans Image */}
      <Image
        src={beans}
        width={800}
        height={500}
        alt="Coffee Beans"
        className="absolute top-[20%] left-12 z-20 opacity-80"
      />

      {/* Coffee Cup Image */}
      <Image
        src={coffeeCup}
        alt="Coffee"
        width={600}
        height={500}
        className="absolute top-0 right-5 z-30"
      />
    </motion.div>
  );
};
