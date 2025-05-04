import React from "react";
import { Logo } from "./Logo";
import { Wishlist } from "./Wishlist";
import { ShoppingBag } from "./ShoppingBag";

export const Header: React.FC = () => {
  return (
    <div className=" shadow-sm p-4 px-8 flex justify-between items-center sticky top-0 right-0 z-10 bg-white ">
      <Logo />
      <div className=" flex space-x-4 relative z-20">
        <Wishlist />
        <ShoppingBag />
      </div>
    </div>
  );
};
