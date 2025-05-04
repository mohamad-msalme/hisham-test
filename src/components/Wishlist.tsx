import React from "react";
import { BadgeBtn } from "./ui/BadgeBtn";
import { HeartIcon } from "lucide-react";
import { DropDownMenuCard } from "./DropDownMenuCard";
import { useWisheslistState } from "@src/state/WishlistState";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const Wishlist: React.FC = () => {
  const [wishlistItems] = useWisheslistState();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        <BadgeBtn length={wishlistItems.length}>
          <HeartIcon className=" size-5" />
        </BadgeBtn>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] overflow-y-auto ">
        <DropdownMenuLabel className=" text-lg">My Wishlist</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {wishlistItems.map((item) => (
            <DropDownMenuCard {...item} wishlist />
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
