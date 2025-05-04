import React from 'react'
import { Product } from '@src/models/Product';


export const useCartOrWishlist = (key: string) => {
  const [items, setItems] = React.useState<Product[]>(() => {
    const storedItems = localStorage.getItem(key);
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const addItem = (newProduct: Product) => {
        const isExist = items.find((item) => item.id === newProduct.id)
        if(isExist) return;
    setItems(prevItems => {
      const updatedItems = [...prevItems, newProduct ];
      localStorage.setItem(key, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeItem = (newProduct: Product) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== newProduct.id);
      localStorage.setItem(key, JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return [items, addItem, removeItem] as const;
}
