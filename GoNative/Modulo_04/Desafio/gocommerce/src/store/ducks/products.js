export const Types = {
  FETCH_REQUEST: 'products/FETCH_REQUEST',
  FETCH_SUCCESS: 'products/FETCH_SUCCESS',
  FETCH_FAILURE: 'products/FETCH_FAILURE',

  SELECT: 'products/SELECT',
};

export const Creators = {
  fetchProducts: (categoryId = null) => ({
    type: Types.FETCH_REQUEST,
    payload: { categoryId },
  }),

  fetchProductsSuccess: products => ({
    type: Types.FETCH_SUCCESS,
    payload: { products },
  }),

  fetchProductsFailure: error => ({
    type: Types.FETCH_FAILURE,
    payload: { error },
  }),
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload.products };
    case Types.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
