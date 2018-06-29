export const Types = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',

  CLEAR: 'cart/CLEAR',
};

export const Creators = {
  addToCart: item => ({
    type: Types.ADD_ITEM,
    payload: { item },
  }),

  removeFromCart: id => ({
    type: Types.REMOVE_ITEM,
    payload: { id },
  }),

  clear: () => ({
    type: Types.CLEAR,
  }),
};

const INITIAL_STATE = {
  data: [],
  quantity: 0,
};

function removeFromCart({ data }, id) {
  data.splice(data.indexOf(item => item.id === id), 1);
  return { data, quantity: data.length };
}

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ITEM:
      return { data: [...state.data, action.payload.item], quantity: state.data.length + 1 };
    case Types.REMOVE_ITEM:
      return removeFromCart(state, action.payload.id);
    default:
      return { ...state, quantity: state.data.length - 1 };
  }
}
