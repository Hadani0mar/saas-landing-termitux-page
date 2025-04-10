
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Monitor, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <ShoppingBag className="h-8 w-8 text-brand-600 mr-2" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-700">
                  سيلا
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#features"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-600"
              >
                منتجاتنا
              </a>
              <a
                href="#pricing"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-600"
              >
                الأسعار
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-brand-600"
              >
                حول الشركة
              </a>
              <Button className="btn-gradient">تواصل معنا</Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 text-right"
              onClick={toggleMenu}
            >
              منتجاتنا
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 text-right"
              onClick={toggleMenu}
            >
              الأسعار
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 text-right"
              onClick={toggleMenu}
            >
              حول الشركة
            </a>
            <div className="px-3 py-2">
              <Button className="w-full btn-gradient">تواصل معنا</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
