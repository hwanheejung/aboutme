"use client";

import HamburgerIcon from "public/icons/hamburger.svg";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import Navigation from ".";

interface HamburgerContextProps {
  isOpen: boolean;
  setClose: () => void;
  setOpen: () => void;
}

const HamburgerContext = createContext<HamburgerContextProps>({
  isOpen: false,
  setClose: () => {},
  setOpen: () => {},
});

export const HamburgerProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setClose = () => setIsOpen(false);
  const setOpen = () => setIsOpen(true);

  const value = useMemo(
    () => ({
      isOpen,
      setClose,
      setOpen,
    }),
    [isOpen],
  );

  return (
    <HamburgerContext.Provider value={value}>
      <button
        className="absolute left-5 top-5 z-50 hidden sm:block"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <HamburgerIcon className="scale-150" />
      </button>
      {children}
    </HamburgerContext.Provider>
  );
};

export const useHamburger = () => {
  const context = useContext(HamburgerContext);
  if (context === undefined) {
    throw new Error("Error at useDrawer");
  }
  return context;
};

const Hamburger = () => {
  return (
    <>
      <HamburgerProvider>
        {/* <button
          className="absolute left-5 top-5 hidden sm:block"
          onClick={() => setOpen()}
        >
          <HamburgerIcon className="scale-150" />
        </button> */}
        <Navigation />
      </HamburgerProvider>
    </>
  );
};

export default Hamburger;
