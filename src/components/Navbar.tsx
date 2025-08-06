import React, { useState, useEffect } from "react";
import { Contact as Cactus, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Programação", href: "#programacao" },
    { name: "Projetos", href: "#submissao" },
    { name: "Público", href: "#publico" },
    { name: "Inscrição", href: "#inscricao" },
    { name: "Organizadores", href: "#organizadores" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-gray-900/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img
              src="logo-msd.png"
              alt="MSD Logo"
              className="h-12 w-auto mr-3"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`font-medium transition duration-200 ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-green-200"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#inscricao"
              className={`px-5 py-2 rounded-lg font-medium transition duration-300 ${
                isScrolled
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-green-500 text-white hover:bg-green-400"
              }`}
            >
              Inscreva-se
            </a>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-xl overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-900 font-medium py-2 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#inscricao"
              className="bg-green-600 text-white px-5 py-3 rounded-lg font-medium text-center hover:bg-green-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
