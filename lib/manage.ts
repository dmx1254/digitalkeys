import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavBarState {
  isShowSearchBar: boolean;
  handleShowSearchBar: () => void;
}

interface Cart {
  productId: string;
  quantity: number;
  title: string;
  category: string;
  price: number;
  icon: string;
  discount: number;
}

interface Personal {
  firstname: string;
  lastname: string;
  contact: string;
}

interface ProductCart {
  personal: Personal;
  cart: Cart[];
  totalPrice: number;
  addToCart: (product: Cart) => void;
  deleteFromCart: (id: string) => void;
  updateFromCart: (id: string, product: Partial<Cart>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  updatePersonal: (personal: Personal) => void;
}

type CombinedState = NavBarState & ProductCart;

const useStore = create<CombinedState>(
  persist(
    (set) => ({
      // NavBar state
      isShowSearchBar: false,
      handleShowSearchBar: () =>
        set((state) => ({ isShowSearchBar: !state.isShowSearchBar })),

      // ProductCart state
      personal: { firstname: "", lastname: "", contact: "" },
      cart: [],
      totalPrice: 0,
      addToCart: (product: Cart) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.productId === product.productId
          );
          if (existingProduct) {
            const updatedCart = state.cart.map((item) =>
              item.productId === product.productId
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            );
            const totalPrice = updatedCart.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            );
            return {
              cart: updatedCart,
              totalPrice: totalPrice,
            };
          } else {
            const updatedCart = [...state.cart, product];
            const totalPrice = updatedCart.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            );
            return {
              cart: updatedCart,
              totalPrice: totalPrice,
            };
          }
        }),
      deleteFromCart: (id: string) =>
        set((state) => {
          const productToDelete = state.cart.find(
            (item) => item.productId === id
          );
          const updatedCart = state.cart.filter(
            (item) => item.productId !== id
          );
          const totalPrice = updatedCart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );
          return {
            cart: updatedCart,
            totalPrice: totalPrice,
          };
        }),
      updateFromCart: (id: string, product: Partial<Cart>) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.productId === id ? { ...item, ...product } : item
          ),
        })),
      updateQuantity: (id: string, quantity: number) =>
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.productId === id ? { ...item, quantity } : item
          );
          const totalPrice = updatedCart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );
          return {
            cart: updatedCart,
            totalPrice: totalPrice,
          };
        }),
      updatePersonal: (personal: Personal) =>
        set(() => ({
          personal,
        })),
    }),
    {
      name: "cart-storage", // nom de la clé dans localStorage
    }
  )
);

export default useStore;
