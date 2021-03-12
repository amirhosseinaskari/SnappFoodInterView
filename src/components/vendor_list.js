import React from "react";
import '../assets/style/components/vendor_list.scss';
import { useEffect } from "react";
import {store} from "../store/store";
import vendorListReducer from '../reducers/vendorlists';
import VendorListItems from './vendor_list_items';
function VendorList(props) {
    useEffect(() => {
        console.log('hi');
        // fetch vendor list (it is controlled with a Saga Middleware)
        // watch fetch vendor list => fetch vendor list => add vendor list
        store.dispatch(vendorListReducer.actions.fetchVendorList({
            pageNumber: store.getState().entities.vendorLists.pageNumber
        }));
    }, []);
    const vendorList = store.getState().entities.vendorLists.vendorList;
    // on scroll handler
    const onScrollHandler = (e) => {
        const isLoading = store.getState().entities.vendorLists.isLoading;
        if(isLoading){
            return;
        }
        
        if(e.target.offsetHeight + e.target.scrollTop + 200 > e.target.scrollHeight){
            store.dispatch(vendorListReducer.actions.fetchVendorList({
                pageNumber: store.getState().entities.vendorLists.pageNumber
            }))
            store.dispatch(vendorListReducer.actions.editLoaderStatus({
                isLoading: true
            }));
        }
    };
   
    // loader status
    const isLoading = store.getState().entities.vendorLists.isLoading;
    
    return (
        <>
         <VendorListItems store={store} list={vendorList} onScroll={onScrollHandler} />
        </>
    );
}
export default VendorList;