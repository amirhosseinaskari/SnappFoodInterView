import {all, takeLatest, takeEvery, call} from 'redux-saga/effects';
import {store} from './store';
import axios from 'axios';
import {getVendorListAPI} from '../api/getVendorListAPI';
import vendorListReducer from '../reducers/vendorlists';
import { act } from '@testing-library/react';
/**
 * 
 * @param action (params that set from vendro list page)
 * this method run for each fetch vendor list request
 */
function* fetchVendorList(action) {
    console.log(action);
    //call get vendor list api for each fetch vendor list action
    const list = yield call( getVendorListAPI,
        'https://snappfood.ir/mobile/v2/restaurant/vendors-list',
         action.payload.pageNumber);
         //after get vendor list api is done add this list to store
    yield store.dispatch(vendorListReducer.actions.vendorListsAdd({
             vendorList: list
            }));
    // inactive loader (isLoading Status)
    yield store.dispatch(vendorListReducer.actions.editLoaderStatus({
        isLoading: false
    }));
}
 
function* watchFetchVendorList() {
    
    yield takeLatest(vendorListReducer.actions.fetchVendorList, fetchVendorList);
}

export default function* rootSaga() {
    yield all([
        watchFetchVendorList()
    ])
}