import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from 'services/api';

import { Types as CategoriesTypes, Creators as CategoriesActions } from 'store/ducks/categories';
import { Creators as ProductsActions } from 'store/ducks/products';
import { Creators as ToastActions } from 'store/ducks/toast';

function* fetch() {
  try {
    const { data } = yield call(api.get, '/categories');

    yield put(CategoriesActions.fetchCategoriesSuccess(data));
  } catch (err) {
    yield put(ToastActions.toastfyError('Não foi possível importar as categorias'));
  }
}

function* fetchProducts(action) {
  if (!action.payload) {
    yield put(ProductsActions.fetchProducts());
    return;
  }
  yield put(ProductsActions.fetchProducts(action.payload.id));
}

export default function* root() {
  yield takeLatest(CategoriesTypes.FETCH_REQUEST, fetch);
  yield takeLatest(CategoriesTypes.SELECT, fetchProducts);
  yield takeLatest(CategoriesTypes.UNSELECT, fetchProducts);
}
