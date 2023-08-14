import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-8">
      <div className="flex items-center justify-between">
        {/* List */}
        <div className="flex gap-20">
            <div className="flex gap-4">
                <Image src="/assets/logo.svg" alt="Holadok" width={24} height={24} className="object-contain" />
                <h2 className="font-bold text-blue-2 tracking-wider text-xl">Holadok</h2>
            </div>

            <ul className="flex gap-8">
                <li className="text-blue-1 font-semibold text-lg tracking-wider cursor-pointer">Home</li>
                <li className="text-blue-1 text-lg tracking-wider cursor-pointer">Features</li>
                <li className="text-blue-1 text-lg tracking-wider cursor-pointer">Blog</li>
                <li className="text-blue-1 text-lg tracking-wider cursor-pointer">About Us</li>
            </ul>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <button type="button" className="px-6 py-2 text-blue-2 text-xl font-medium">
            Login
          </button>
          <button type="button" className="px-6 py-2 border border-blue-2 text-blue-2 text-xl font-medium">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
