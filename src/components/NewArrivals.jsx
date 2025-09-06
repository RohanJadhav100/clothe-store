import ProductCard from "./Card/ProductCard";
import Typography from "./Typography";

const products = [
  {
    image: "/Images/shirt.jpg",
    name: "Gradient Graphic T-shirt",
    price: 30,
    rating: 4.5,
  },
  {
    image: "/Images/shirt.jpg",
    name: "Gradient Graphic T-shirt",
    price: 30,
    rating: 4.5,
  },

  {
    image: "/Images/shirt.jpg",
    name: "Gradient Graphic T-shirt",
    price: 30,
    rating: 4.5,
  },
  {
    image: "/Images/shirt.jpg",
    name: "Gradient Graphic T-shirt",
    price: 30,
    rating: 4.5,
  },
];

export default function NewArrivals() {
  return (
    <section className="mt-12 pt-3 px-4">
      <h2 className="text-black font-bold text-center text-3xl md:text-4xl  mb-12 ">
        <Typography> NEW ARRIVALS</Typography>
      </h2>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((p, idx) => (
            <ProductCard key={idx} {...p} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className=" rounded-full px-12 cursor-pointer py-4 border border-[#0000001a] font-light text-sm text-base hover:bg-gray-100 transition">
          View All
        </button>
      </div>
    </section>
  );
}
