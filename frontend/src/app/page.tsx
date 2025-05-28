'use client';


import { Card } from '@/components/Card';
import { Hero } from '@/components/Hero';
import { AddCoffeeForm } from '@/components/CoffeeForm';
import { useEffect,useState } from 'react';


type Coffee = {
  id?: string;
  _id?: string;
  [key: string]: any;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};

export default function Home() {
  const [coffees,setCoffees] = useState<Coffee[]>([]);

  const fetchCoffees = async () => {
    try {
       const res = await fetch('http://localhost:5000/coffees');
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      setCoffees(data);
    } catch (error) {
      console.error(error);
    }
    };

    useEffect(() => {
      fetchCoffees();
      }, []);


   return (
    

    <main className="p-20">
      <Hero />
      <h1 className=" mt-[40px] text-2xl font-bold mb-4">Coffee List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee) => (
          console.log("hola",coffee),
          <Card
            key={coffee.id || coffee._id}
            coffee={coffee}

          />
         
        ))}
      </div>
      <div className="mt-[200px]">
        <AddCoffeeForm onCoffeeAdded={fetchCoffees} />
      </div>
    </main>
  );
}
