import { createContext, useContext, useState } from "react";

interface IShoppingCartProvider {
  children: React.ReactNode;
}
interface ICartItem {
  id: number;
  qty: number;
}
interface IShoppingCartContex {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProductCart: (id: number) => void;
  getProductQty: (id: number) => number;
  cartQty: number;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContex);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...cartItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProductCart = (id: number) => {
    // const selectProductCart = cartItems.find((item) => item.id == id);
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const cartQty = cartItems.reduce(
    (totalQty, item) => (totalQty += item.qty),
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProductCart,
        cartQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
