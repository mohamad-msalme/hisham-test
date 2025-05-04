import { Product } from "@src/models/Product";
import { atom, useRecoilState } from "recoil";
import { WISHLIST_LOCAL_STORAGE_KEY } from "@src/constants";
import { toast } from "sonner";

/* This code snippet is defining a Recoil atom named `wishlistState` that represents the state of a
wishlist in a shopping application. Here's what it's doing: */
export const wishlistState = atom<Product[]>({
  key: WISHLIST_LOCAL_STORAGE_KEY,
  default: [],
  effects: [
    (store) => {
      const savedValue = localStorage.getItem(WISHLIST_LOCAL_STORAGE_KEY);
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
 * The `useWisheslistState` function manages the state of a wishlist, allowing users to add and remove
 * products from it.
 * @returns An array containing the `wisheslist` state, `addWish` function, and `removeWish` function
 * is being returned as a tuple.
 */
export const useWisheslistState = () => {
  const [wisheslist, setCart] = useRecoilState(wishlistState);

  const addWish = (newProduct: Product) => {
    const isExist = wisheslist.find(
      (wishlist) => wishlist.id === newProduct.id
    );
    if (isExist) return toast.info("is Already in Wishlist");
    const updatedItems = [...wisheslist, newProduct];
    localStorage.setItem(
      WISHLIST_LOCAL_STORAGE_KEY,
      JSON.stringify(updatedItems)
    );
    setCart(updatedItems);
    toast.success("Added to Wishlist");
  };

  const removeWish = (newProduct: Product) => {
    const updatedItems = wisheslist.filter(
      (wishlist) => wishlist.id !== newProduct.id
    );
    localStorage.setItem(
      WISHLIST_LOCAL_STORAGE_KEY,
      JSON.stringify(updatedItems)
    );
    setCart(updatedItems);
  };

  return [wisheslist, addWish, removeWish] as const;
};
