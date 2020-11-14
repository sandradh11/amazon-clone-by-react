export const initialstate = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action, "<--YOOOO");
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_ITEM_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_ITEM_FROM_BASKET":
      const removeId = action.payload;
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === removeId);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Invalid id :", action.payload);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
