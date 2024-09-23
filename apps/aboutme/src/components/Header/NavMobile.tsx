"use client";

import Link from "next/link";
import HamburgerIcon from "public/icons/hamburger.svg";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import MenuList from "../Menu/MenuList";
import Title from "./Title";
import { AnimatePresence, motion } from "framer-motion";

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

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <HamburgerContext.Provider value={value}>
      {children}
    </HamburgerContext.Provider>
  );
};

export const useHamburger = () => {
  const context = useContext(HamburgerContext);
  if (context === undefined) {
    throw new Error("Error at useHamburger");
  }
  return context;
};

const Overlay = ({ closeOnClick }: { closeOnClick: boolean }) => {
  const { isOpen, setClose } = useHamburger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (closeOnClick && event.target === event.currentTarget) {
      setClose();
    }
  };

  return (
    <div
      className={`absolute left-0 top-full z-10 flex h-dvh w-full items-center justify-center bg-black/60 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={handleClick}
    />
  );
};

const MobTitle = () => {
  const { setClose } = useHamburger();
  return (
    <div onClick={setClose}>
      <Title />
    </div>
  );
};

const NavMobile = () => {
  return (
    <HamburgerProvider>
      <div className="relative flex items-center justify-between px-5 py-3">
        <MobTitle />
        <HamburgerBtn />
        <Drawer />
        <Overlay closeOnClick />
      </div>
    </HamburgerProvider>
  );
};

const HamburgerBtn = () => {
  const { isOpen, setClose, setOpen } = useHamburger();
  return (
    <div>
      <button
        className="z-50"
        onClick={() => {
          isOpen ? setClose() : setOpen();
        }}
      >
        <HamburgerIcon className="scale-150" />
      </button>
    </div>
  );
};

const Drawer = () => {
  const { isOpen, setClose } = useHamburger();

  if (isOpen) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="shadow-4xl absolute left-0 right-0 top-full z-50 border-b border-b-white/20 bg-neutral-950 p-5 pt-0"
          >
            <MenuList
              renderItem={(nav, index) => (
                <motion.div
                  key={nav.link}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index / 10,
                  }}
                  className="flex"
                >
                  <Link
                    href={nav.link}
                    onClick={setClose}
                    className="flex-1 rounded-full border border-primary/20 px-4 py-3 text-center"
                  >
                    {nav.title}
                  </Link>
                </motion.div>
              )}
              className="z-50 flex w-full flex-col gap-4 bg-black px-5 pb-5 pt-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return null;
  }
};

export default NavMobile;
