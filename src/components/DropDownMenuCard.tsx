import React from "react";
import { cn } from "@src/lib/utils";
import { Button } from "./ui/button";
import { Product } from "@src/models/Product";
import { useNavigate } from "react-router-dom";
import { useCartState } from "@src/state/CartState";
import { useWisheslistState } from "@src/state/WishlistState";
import { DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";

export type DropDownMenuCardProps = Product & {
  wishlist?: boolean;
};

export const DropDownMenuCard: React.FC<DropDownMenuCardProps> = ({
  wishlist,
  ...product
}) => {
  const navigate = useNavigate();
  const [, addToCart] = useCartState();
  const [, , remove] = useWisheslistState();

  const handelAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    callback: (item: Product) => void
  ) => {
    e.preventDefault();
    e.stopPropagation();
    callback(product);
  };

  return (
    <>
      <DropdownMenuItem
        className=" cursor-pointer"
        onClick={() => navigate(`/${product.id}`)}
      >
        <div className={cn("flex flex-col items-center gap-4")}>
          <div className=" flex gap-4 items-center">
            <img
              alt="Thumbnail"
              className="rounded-md aspect-square object-cover"
              height="64"
              src={product.image}
              width="64"
            />
            <div className="grid gap-1 text-xs mr-auto">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {product.categories.map((cat) => cat.name).join(", ")}
              </p>
              <p className="font-semibold">{product.price + " $"}</p>
            </div>
          </div>
          <div
            className={cn("w-full flex justify-center items-center gap-2", {
              " hidden": !wishlist,
            })}
          >
            <Button size="sm" onClick={(e) => handelAction(e, addToCart)}>
              Add to cart
            </Button>
            <Button size="sm" onClick={(e) => handelAction(e, remove)}>
              Remove
            </Button>
          </div>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
    </>
  );
};
