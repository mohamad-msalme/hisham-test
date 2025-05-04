import React from "react";
import { cn } from "@src/lib/utils";
import { Button } from "@src/components/ui/button";
import { CartItem } from "./CartItem";
import { Subtotal } from "./SubTotal";
import { useNavigate } from "react-router-dom";
import { useCartState } from "@src/state/CartState";

export const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();
  const [carts] = useCartState();
  const [totalPric, setTotalPrice] = React.useState(() =>
    carts.reduce((acc, val) => acc + val.price, 0)
  );

  return (
    <div>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <div className="pt-4 ">
        <h1 className="mb-4 text-center text-2xl font-bold">Shopping Cart</h1>
        <div className="mx-auto max-w-5xl gap-4 flex flex-col-reverse justify-center px-6 md:flex-row md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <p
              className={cn(" text-center text-2xl mt-8", {
                " hidden ": carts.length > 0,
              })}
            >
              No Products
            </p>
            {carts.map((cart) => (
              <CartItem {...cart} updatePrice={setTotalPrice} />
            ))}
          </div>
          <div
            className={cn(
              "mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3",
              {
                " hidden ": carts.length === 0,
              }
            )}
          >
            <Subtotal total={totalPric} />
            <Button className=" w-full mt-6">Check out</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
