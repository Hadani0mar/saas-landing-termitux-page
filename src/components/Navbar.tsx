
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Monitor, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme, systemPrefersDark);
    } else {
      setTheme("system");
      applyTheme("system", systemPrefersDark);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const applyTheme = (theme: "light" | "dark" | "system", systemPrefersDark: boolean) => {
    const isDark = 
      theme === "dark" || 
      (theme === "system" && systemPrefersDark);
    
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    
    setTheme(nextTheme);
    applyTheme(nextTheme, systemPrefersDark);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light": return <Sun size={20} />;
      case "dark": return <Moon size={20} />;
      default: return <Monitor size={20} />;
    }
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <ShoppingBag className="h-8 w-8 text-brand-600 dark:text-brand-400 mr-2" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-700 dark:from-brand-400 dark:to-brand-500">
                  سيلا
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#features"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
              >
                منتجاتنا
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
              >
                حول الشركة
              </a>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleTheme}
                className="mr-2 bg-transparent border-gray-200 dark:border-gray-700"
              >
                {getThemeIcon()}
              </Button>
              <Button className="btn-gradient">تواصل معنا</Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleTheme}
              className="mr-2 bg-transparent border-gray-200 dark:border-gray-700"
            >
              {getThemeIcon()}
            </Button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 text-right"
              onClick={toggleMenu}
            >
              منتجاتنا
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 text-right"
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
