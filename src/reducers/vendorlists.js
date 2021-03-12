import {createSlice} from '@reduxjs/toolkit';
/**
 * this reducer created for showing vendor lists
 */
const vendorListsReducer = createSlice({
    name: 'lists',
    initialState: {
        vendorList: [],
        pageNumber: 0,
        isLoading: false
    },
    reducers: {
        editLoaderStatus: (lists, action) => {
            lists.isLoading = action.payload.isLoading;
        },
        fetchVendorList: (lists, action)=> {
            lists.pageNumber = action.payload.pageNumber;
            return lists;
        },
        vendorListsAdd: (lists, action) => {
            
            const vendorList = Array.prototype
            .filter.call(action.payload.vendorList, (item) => item.type === "VENDOR");
            vendorList.forEach((item, index) => {
                lists.vendorList.push(item);
            })
            lists.pageNumber++;
            return lists;
        }
    }
});

export default vendorListsReducer;