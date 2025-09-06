// src/components/ProductCard.jsx
import Image from "next/image";

export default function ProductCard({ image, name, price, rating }) {
  return (
    <div className="flex flex-col rounded-3xl  items-start  hover:scale-[1.04]">
      <Image
        src={image}
        alt={name}
        width={320}
        height={360}
        className="rounded-xl object-cover"
      />
      <div className="mt-4 text-lg font-semibold text-black ">{name}</div>
      <div className="flex items-start gap-1 justify-start mt-2">
        {/* Five stars (yellow) and rating display */}
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <polygon points="9.9,1.1 12.3,6.5 18.2,7.1 13.7,10.8 15.1,16.6 9.9,13.8 4.7,16.6 6.2,10.8 1.8,7.1 7.7,6.5" />
          </svg>
        ))}
        <span className="ml-1 text-black text-sm font-light">{rating} / 5</span>
      </div>
      <div className="mt-2 text-2xl font-semibold text-black font-montserrat  ">
        ₹ {price}
      </div>
    </div>
  );
}
