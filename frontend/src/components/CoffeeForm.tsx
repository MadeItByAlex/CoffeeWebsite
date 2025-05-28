'use client';

import { useState } from "react";

type AddCoffeeFormProps = {
    onCoffeeAdded?: () => void;
};

export const AddCoffeeForm = ({ onCoffeeAdded }: AddCoffeeFormProps) => {
    const[formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        price: '',
    });


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const fetchExistingCoffees = async () => {
  const res = await fetch('http://localhost:5000/coffees');
  const data = await res.json();
  return data;
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      const existingCoffees = await fetchExistingCoffees();

 
  const duplicate = existingCoffees.find(
    (coffee: any) => coffee.title.toLowerCase() === formData.title.toLowerCase()
  );

  if (duplicate) {
    alert('A coffee with this title already exists!');
    return; 
  }

    const res = await fetch('http://localhost:5000/coffees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...formData,
            price: parseFloat(formData.price),
        }),
    });

    if (res.ok) {
      alert('Coffee added successfully!');
      setFormData({ title: '', description: '', imageUrl: '', price: '' });

    if (onCoffeeAdded) {
        onCoffeeAdded();
    }
    } else {
      alert('Error adding coffee');
    }

}
return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#EEC58C] p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-black">Add a New Coffee</h2>

      <input
        type="text"
        name="title"
        placeholder="Name"
        value={formData.title}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-black"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-black"
        required
      />

      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-black"
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-black"
        required
        step="1"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Add Coffee
      </button>
    </form>
  );
};

