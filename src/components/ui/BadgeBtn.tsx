import React from "react";
import { cn } from "@src/lib/utils";
import { Button } from "./button";

type ShoppingBagBtnProps = {
  length: number;
};

export const BadgeBtn: React.FC<
  React.PropsWithChildren<ShoppingBagBtnProps>
> = ({ length, children }) => (
  <Button
    variant="outline"
    className={cn(
      "relative p-0 flex items-center justify-center w-12 h-12 border-none  rounded-full"
    )}
  >
    {children}
    <span
      className={cn(
        "absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-rose-500 text-white text-xs font-semibold rounded-full",
        {
          " hidden": !length,
        }
      )}
    >
      {length}
    </span>
  </Button>
);
