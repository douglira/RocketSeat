export const Types = {
  FETCH_REQUEST: 'categories/FETCH_REQUEST',
  FETCH_SUCCESS: 'categories/FETCH_SUCCESS',
  FETCH_FAILURE: 'categories/FETCH_FAILURE',

  SELECT: 'categories/SELECT',
  UNSELECT: 'categories/UNSELECT',
};

export const Creators = {
  fetchCategories: () => ({
    type: Types.FETCH_REQUEST,
  }),

  fetchCategoriesSuccess: categories => ({
    type: Types.FETCH_SUCCESS,
    payload: { categories },
  }),

  fetchCategoriesFailure: error => ({
    type: Types.FETCH_FAILURE,
    payload: { error },
  }),

  selectCategory: id => ({
    type: Types.SELECT,
    payload: { id },
  }),

  unselectCategory: () => ({
    type: Types.UNSELECT,
  }),
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  selected: null,
};

export default function categoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.categories,
      };
    case Types.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.SELECT:
      return {
        ...state,
        selected: (state.data.find(item => String(item.id) === String(action.payload.id))).id,
      };
    case Types.UNSELECT:
      return { ...state, selected: null };
    default:
      return state;
  }
}
