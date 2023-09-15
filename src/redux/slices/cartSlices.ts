import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  totalPrice: number;
  cartItems: any[];
}
interface CartItem {
  id: number;
  name: string;
  price: number;
  stocks: number;
  rattings: number;
  image: string;
  info: string;
  numOfReview: string;
  //   qtyOfOrder: number;
}
const initialState: AppState = {
  totalPrice: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      console.log(item, "form redux");
      let result = state.cartItems.find((product) => product.id === item.id);
      let indexx = state.cartItems.findIndex(
        (product) => product.id === item.id
      );
      console.log(
        result,
        "==result",
        item,
        "==item",
        indexx,
        "==index result of form redux"
      );
      //   if (result) {
      //     console.log("if condition");
      //     state.totalPrice = state.totalPrice + item.price;
      //     state.cartItems[indexx] = {
      //       ...item,
      //       qtyOfOrder: state.cartItems[indexx].qtyOfOrder + 1,
      //     }; +
      //   } else {
      console.log("else condition");

      state.cartItems = [...state.cartItems, { ...item, qtyOfOrder: 1 }];
      state.totalPrice = state.totalPrice + item.price;
      console.log("state==>", state.cartItems);
      //   }
    },
    removeCartItems: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
    checkOutCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
    increaseItemQty: (state, action: PayloadAction<any>) => {
      const id = action.payload;
      // console.log(item, "form redux");
      let indexx = state.cartItems.findIndex((product) => product.id === id);
      state.totalPrice = state.totalPrice + state.cartItems[indexx].price;
      state.cartItems[indexx] = {
        ...state.cartItems[indexx],
        qtyOfOrder: state.cartItems[indexx].qtyOfOrder + 1,
      };
    },
    decreseItemQty: (state, action: PayloadAction<any>) => {
      const id = action.payload;
      // console.log(item, "form redux");
      let indexx = state.cartItems.findIndex((product) => product.id === id);
      state.totalPrice = state.totalPrice - state.cartItems[indexx].price;
      state.cartItems[indexx] = {
        ...state.cartItems[indexx],
        qtyOfOrder: state.cartItems[indexx].qtyOfOrder - 1,
      };
    },
    removeItems: (state, action: PayloadAction<any>) => {
      let id = action.payload;
      let indexx = state.cartItems.findIndex((product) => product.id === id);
      //   console.log(state.cartItems, indexx, "fom redux");
      state.totalPrice =
        state.totalPrice -
        parseInt(state.cartItems[indexx].price) *
          parseInt(state.cartItems[indexx].qtyOfOrder);
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
  },
});

export const {
  removeCartItems,
  addToCart,
  checkOutCart,
  increaseItemQty,
  decreseItemQty,
  removeItems,
} = cartSlice.actions;

export default cartSlice.reducer;
