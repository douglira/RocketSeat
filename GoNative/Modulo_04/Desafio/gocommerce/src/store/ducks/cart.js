export const Types = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',

  CLEAR: 'cart/CLEAR',
};

export const Creators = {
  addToCart: (item, quantity = 0) => ({
    type: Types.ADD_ITEM,
    payload: { item, quantity },
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
};

function addToCart(state, product, quantity) {
  let { data } = state;
  const qt = quantity || 1;

  let item = data.find(datatate => datatate.id === product.id);

  if (item) {
    if (quantity) {
      item = { ...item, quantity: qt };
    } else {
      item = { ...item, quantity: item.quantity + qt };
    }

    data.splice(data.indexOf(datatate => datatate.id === item.id), 1, item);
    data = [...data];

    return { data };
  }

  data = [...data, { ...product, quantity: qt }];

  return { data };
}

function removeFromCart(state, id) {
  const { data } = state;

  const index = data.findIndex(itemIndex => itemIndex.id === id);
  data.splice(index, 1);

  return { data: [...data] };
}

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ITEM:
      return addToCart(state, action.payload.item, action.payload.quantity);
    case Types.REMOVE_ITEM:
      return removeFromCart(state, action.payload.id);

    case Types.CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}
