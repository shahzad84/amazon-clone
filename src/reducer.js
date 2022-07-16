//reducer: pushing data in datalayer or it create a datalayer(it always listen when we add to basket or remove from basket)
export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
    console.log(action);
  switch ((action.type)) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
