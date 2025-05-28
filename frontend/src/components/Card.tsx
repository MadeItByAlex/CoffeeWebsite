import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import { motion,useInView } from 'framer-motion';



type Coffee = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

type CardProps = {
  coffee: Coffee;
};

export const Card: React.FC<CardProps> = ({ coffee }) => {

  const { title, description, imageUrl,price } = coffee;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}

      initial={{y: 50 , opacity: 0}}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
     className='bg-[#EEC58C] text-black p-4 rounded-lg shadow-md'>

      <div className='relative w-full h-60 mb-2'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className='object-cover rounded-md'
        />
      </div>

      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='text-sm'>{description}</p>
      <p className='font-bold'>{price}$</p>

    </motion.div>

  )

}



