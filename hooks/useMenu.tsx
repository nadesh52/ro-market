import { useEffect, useState, RefObject } from "react";

export const useMenu = (menuRef: RefObject<HTMLElement>) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpenMenu(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpenMenu(false);
      }
    };

    if (isOpenMenu) {
      window.addEventListener("keyup", handleKeyUp);
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenMenu, menuRef]);

  return [isOpenMenu, setIsOpenMenu] as const;
};