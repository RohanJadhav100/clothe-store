import React from "react";
import ProductCard from "./Card/ProductCard";
import Typography from "./Typography";

export default function () {
  const products = [
    {
      image: "/Images/shirt2.jpg",
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
    },
    {
      image: "/Images/shirt2.jpg",
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
    },

    {
      image: "/Images/shirt2.jpg",
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
    },
    {
      image: "/Images/shirt2.jpg",
      name: "Gradient Graphic T-shirt",
      price: 30,
      rating: 4.5,
    },
  ];
  return (
    <section className="mt-12 pt-3 px-4">
      <h2 className="text-black font-bold text-center text-3xl md:text-4xl mb-12 ">
        <Typography> Top Selling</Typography>
      </h2>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
