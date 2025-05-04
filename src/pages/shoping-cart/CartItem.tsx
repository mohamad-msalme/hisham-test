import React from "react";
import { cn } from "@src/lib/utils";
import { Button } from "@src/components/ui/button";
import { Product } from "@src/models/Product";
import { useCartState } from "@src/state/CartState";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type CartItemProps = Product & {
  updatePrice: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * The `CartItem` component in TypeScript React handles updating quantity, price, and removing items
 * from a cart.
 * @param  - The `CartItem` component is a functional component in React that represents an item in a
 * shopping cart. It receives props through the `CartItemProps` interface. Here's a breakdown of the
 * props and functionality of the component:
 * @returns The `CartItem` component is being returned. It is a functional component that displays
 * information about a product in a shopping cart, including the product image, name, categories,
 * price, quantity input with plus and minus buttons, and a remove button. The component also includes
 * functions to handle quantity changes, updating the total price, and removing the product from the
 * cart.
 */
export const CartItem: React.FC<CartItemProps> = ({
  updatePrice,
  ...product
}) => {
  const navigate = useNavigate();
  const [, , remove] = useCartState();
  const [quantity, setQuantity] = React.useState(1);

  const handelAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    updatePrice((prevState) => prevState - quantity * product.price);
    remove(product);
  };

  const handelPlusQuantity = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((prevState) => prevState + 1);
    updatePrice((prevState) => prevState + product.price);
  };

  const handelMinusQuantity = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1));
    if (quantity > 1) updatePrice((prevState) => prevState - product.price);
  };

  const handelOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    if (!value) return;
    setQuantity(value);
    updatePrice(
      (prevState) =>
        prevState - quantity * product.price + value * product.price
    );
  };

  return (
    <div
      onClick={() => navigate(`/${product.id}`)}
      className="cursor-pointer mb-6 rounded-lg bg-white p-6 shadow-md space-y-2 flex flex-col sm:flex-row gap-4 items-center "
    >
      <div className=" self-normal ">
        <img
          width={200}
          height={200}
          alt="Thumbnail"
          className="rounded-md aspect-square object-cover"
          src={product.image}
        />
      </div>
      <div className=" flex-1">
        <div className="grid gap-4 text-lg mr-auto">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {product.categories.map((cat) => cat.name).join(", ")}
          </p>
          <p className="font-semibold">{product.price + " $"}</p>
          <div
            className={cn(
              "w-full flex flex-wrap  justify-center items-center gap-4"
            )}
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className=" flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
            >
              <div className="flex border-gray-100 gap-2">
                <Button
                  disabled={quantity === 1}
                  size="sm"
                  onClick={handelMinusQuantity}
                >
                  <MinusIcon />
                </Button>
                <input
                  className=" w-10 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={quantity}
                  min="1"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onChange={(e) => handelOnInputChange(e)}
                />
                <Button size="sm" onClick={handelPlusQuantity}>
                  <PlusIcon />
                </Button>
              </div>
            </div>
            <Button onClick={handelAction} variant="outline" size="sm">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
