"use client";

import {
  Search,
  ShoppingCart,
  CircleUserRound,
  ChevronDown,
  Menu,
} from "lucide-react";
import React, { useState } from "react";
import Typography from "./Typography";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 z-[9999] w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <h1 className="md:text-2xl text-3xl font-bold tracking-tight">
            <Typography>SHOP.CO</Typography>
          </h1>

          {/* Desktop Nav + Search */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <div className="relative group hidden md:block">
                <a
                  href="#"
                  className="text-black font-light text-md flex items-center hover:text-black transition-colors"
                >
                  <span>Shop</span>
                  <ChevronDown size={18} className="ml-1" />
                </a>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md hidden group-hover:block z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Men’s Clothing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Women’s Clothing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href="#"
                className="text-black font-light text-md hover:text-black transition-colors"
              >
                On Sale
              </a>
              <a
                href="#"
                className="text-black font-light text-md hover:text-black transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="text-black font-light text-md hover:text-black transition-colors"
              >
                Brands
              </a>
            </nav>
            <div className="relative ml-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search for products..."
                className="pl-12 pr-5 py-3 w-52 rounded-full bg-gray-100 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Icons (cart/user) always visible */}
          <div className="flex items-center space-x-4">
            <button className="text-black">
              <ShoppingCart className="h-7 w-7 md:h-5 md:w-5" />
            </button>
            <button className="text-black">
              <CircleUserRound className="h-7 w-7 md:h-5 md:w-5" />
            </button>
            {/* Hamburger for mobile */}
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9999] bg-black bg-opacity-40 transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>
      <nav
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-[10000] transform transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center h-18 px-4">
          <h1 className="font-bold tracking-tight">
            <Typography className="text-3xl">SHOP.CO</Typography>
          </h1>
          <button onClick={() => setOpen(false)}>
            <span className="text-3xl">&times;</span>
          </button>
        </div>
        <div className="flex flex-col mt-5 space-y-3 px-4">
          <div className="flex flex-col">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-black text-base py-2 flex items-center justify-between font-light"
            >
              <span>Shop</span>
              <ChevronDown
                size={18}
                className={`ml-1 transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Mobile Dropdown */}
            {isDropdownOpen && (
              <div className="pl-4 mt-1">
                <a href="#" className="block py-2 text-sm text-gray-700">
                  Men’s Clothing
                </a>
                <a href="#" className="block py-2 text-sm text-gray-700">
                  Women’s Clothing
                </a>
                <a href="#" className="block py-2 text-sm text-gray-700">
                  Accessories
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-black text-base py-2 font-light">
            On Sale
          </a>
          <a href="#" className="text-black text-base py-2 font-light">
            New Arrivals
          </a>
          <a href="#" className="text-black text-base py-2 font-light">
            Brands
          </a>
        </div>
      </nav>
    </header>
  );
}
