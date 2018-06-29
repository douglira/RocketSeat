import { takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { api } from 'services/api';

import { Types as ProductsTypes, Creators as ProductsActions } from 'store/ducks/products';

function* fetch(action) {
  try {
    yield delay(3000);
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
    yield put(ProductsActions.fetchProductsFailure('Não foi possível carregar os produtos'));
  }
}

export default function* root() {
  yield takeLatest(ProductsTypes.FETCH_REQUEST, fetch);
}
