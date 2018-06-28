import { combineReducers } from 'redux';

import cart from './cart';
import categories from './categories';
import products from './products';

export default combineReducers({
  cart,
  categories,
  products,
});
