import { toast } from "sonner";
import { Product } from "@src/models/Product";
import { atom, useRecoilState } from "recoil";
import { CART_LOCAL_STORAGE_KEY } from "@src/constants";

/* This code snippet in TypeScript is defining a Recoil atom named `cartState` that stores an array of
`Product` objects. Here's a breakdown of what it does: */
const cartState = atom<Product[]>({
  key: CART_LOCAL_STORAGE_KEY,
  default: [],
  effects: [
    (store) => {
      const savedValue = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
      try {
        const parsedValue = JSON.parse(savedValue || "[]") as Product[];
        store.setSelf(parsedValue);
      } catch (error) {
        store.setSelf([]);
      }
    },
  ],
});

/**
 * The `useCartState` function manages the state of a shopping cart, allowing for adding and removing
 * products while persisting the cart data in local storage.
 * @returns An array containing the current `carts` state, the `addCart` function to add a product to
 * the cart, and the `removeCart` function to remove a product from the cart.
 */
export const useCartState = () => {
  const [carts, setCart] = useRecoilState(cartState);

  const addCart = (newProduct: Product) => {
    const isExist = carts.find((cart) => cart.id === newProduct.id);
    if (isExist) return toast.info(`is Already in cart`);
    const updatedItems = [...carts, newProduct];
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
    setCart(updatedItems);
    toast.success("Added to Cart");
  };

  const removeCart = (newProduct: Product) => {
    const updatedItems = carts.filter((cart) => cart.id !== newProduct.id);
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  return [carts, addCart, removeCart] as const;
};
