"use client";

import React, { useEffect, useRef, useState } from "react";
import MenuModal from "./MenuModal";
import HeaderNav from "./HeaderNav";
import HeaderBanner from "./HeaderBanner";
import ButtonGroup from "./ButtonGroup";
import GameDetail from "./GameDetail";

const HeaderMenu = () => {
  const [isScroll, setIsScroll] = useState<{ top: boolean; mid: boolean }>({
    top: false,
    mid: false,
  });
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleScroll = () => {
    setIsScroll({
      top: window.scrollY >= 100,
      mid: window.scrollY >= 200,
    });
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpenMenu(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target === menuRef.current) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div>
      <HeaderNav
        isScroll={isScroll}
        setIsOpenMenu={() => setIsOpenMenu(true)}
        btnRef={btnRef}
      />

      <HeaderBanner isScroll={isScroll} />

      <MenuModal
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={() => setIsOpenMenu(false)}
        menuRef={menuRef}
      />

      <div className="hidden items-center justify-between px-8 lg:flex">
        <GameDetail />
        <ButtonGroup />
      </div>
    </div>
  );
};

export default HeaderMenu;
