import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

interface UIContextValue {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const UIContext = createContext<UIContextValue>({
  isMenuOpen: false,
  toggleMenu: () => undefined,
});

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      isMenuOpen,
      toggleMenu,
    }),
    [isMenuOpen, toggleMenu]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => useContext(UIContext);

