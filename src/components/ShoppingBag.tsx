import React from "react";
import { Button } from "./ui/button";
import { BadgeBtn } from "./ui/BadgeBtn";
import { useCartState } from "@src/state/CartState";
import { ShoppingBagIcon } from "lucide-react";
import { DropDownMenuCard } from "./DropDownMenuCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export const ShoppingBag: React.FC = () => {
  const navigate = useNavigate();
  const [cartItems] = useCartState();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BadgeBtn length={cartItems.length}>
          <ShoppingBagIcon className=" size-5" />
        </BadgeBtn>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] overflow-y-auto">
        <DropdownMenuLabel className=" text-lg">My Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {cartItems.map((item) => (
            <DropDownMenuCard {...item} />
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Button onClick={() => navigate("cart")} className=" w-full">
            Go to cart
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
