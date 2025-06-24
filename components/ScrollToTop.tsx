"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // A função que verifica a posição do scroll e atualiza o estado
  const toggleVisibility = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // A função que rola a página para o topo
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Adiciona o event listener quando o componente é montado
    window.addEventListener("scroll", toggleVisibility);

    // Remove o event listener quando o componente é desmontado (limpeza)
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-52 right-2 md:bottom-36 md:right-36 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 bg-gray-600 text-white font-semibold rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-opacity duration-300 ease-in-out animate-fade-in"
          aria-label="Voltar ao topo"
        >
          {/* Ícone de seta para cima */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
