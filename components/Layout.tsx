"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, User, Code, Briefcase, Mail } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "About", icon: User },
    { name: "Skills", icon: Code },
    { name: "Projects", icon: Briefcase },
    { name: "Contact", icon: Mail },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <header className="fixed w-full z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Nezumi - Developer
          </motion.h1>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-opacity duration-300"
              whileTap={{ opacity: 0.5 }}
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-full transition-opacity duration-300 md:hidden"
              whileTap={{ opacity: 0.5 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className={`fixed top-0 right-0 h-full w-64 ${isDarkMode ? "bg-black" : "bg-white"} z-20 md:hidden flex flex-col justify-center`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-full transition-opacity duration-300"
              whileTap={{ opacity: 0.5 }}
            >
              <X size={24} />
            </motion.button>
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  variants={menuItemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className={`flex items-center space-x-4 px-8 py-2 text-lg font-medium transition-all duration-300 ${
                      activeMenuItem === item.name ? "border-l-4 border-current" : ""
                    }`}
                    onClick={() => {
                      setActiveMenuItem(item.name);
                      toggleMenu();
                    }}
                  >
                    <item.icon
                      size={24}
                      color={item.name === "Skills" ? "white" : "currentColor"}
                    />
                    <span>{item.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <main className="container mx-auto px-4 py-24">{children}</main>
      <footer className={`p-6 border-t ${isDarkMode ? "border-white" : "border-black"} text-center`}>
        <p>&copy; 2025 nezumi0627. All rights reserved.</p>
      </footer>
    </div>
  );
}
