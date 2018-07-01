import { combineReducers } from 'redux';

import toast from './toast';
import cart from './cart';
import categories from './categories';
import products from './products';

export default combineReducers({
  toast,
  cart,
  categories,
  products,
});
