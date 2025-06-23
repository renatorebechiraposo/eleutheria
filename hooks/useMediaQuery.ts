import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Garante que o código só rode no cliente (onde 'window' existe)
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(query);

    // Atualiza o estado se o resultado da query mudar
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Cria um 'ouvinte' para mudanças no tamanho da tela
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    // Função de limpeza: remove o 'ouvinte' quando o componente for desmontado
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}
