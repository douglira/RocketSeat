import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

import { Types as ProductsTypes, Creators as ProductsActions } from 'store/ducks/products';
import { Creators as ToastActions } from 'store/ducks/toast';

function* fetch(action) {
  try {
    const { categoryId } = action.payload;

    if (categoryId) {
      const {
        data: { products },
      } = yield call(api.get, `/category_products/${categoryId}`);

      yield put(ProductsActions.fetchProductsSuccess(products));
    } else {
      const { data: products } = yield call(api.get, '/products');

      yield put(ProductsActions.fetchProductsSuccess(products));
    }
  } catch (err) {
    yield put(ToastActions.toastfyError('Não foi possível carregar os produtos'));
  }
}

export default function* root() {
  yield takeLatest(ProductsTypes.FETCH_REQUEST, fetch);
}
