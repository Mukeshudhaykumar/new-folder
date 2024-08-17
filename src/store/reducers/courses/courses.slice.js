import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { 
    // createProviders,
    getCourses
} from "../../appActions/courses.actions";


const provider_data = createSlice({
    name: 'courses',
    initialState,
    reducers: {
    
    },
    extraReducers: builder => {
        builder.addCase(getCourses.pending, (state) => {
            state.listDataset.loaders = {
                pending: true,
                fullfilled: false,
                rejected: false
            }
        })
        builder.addCase(getCourses.fulfilled, (state, { payload }) => {
            state.providers.loaders = {
                pending: false,
                fullfilled: true,
                rejected: false
            }
            state.providers.data = payload

        })
        builder.addCase(getCourses.rejected, (state, { payload }) => {
            state.providers.loaders = {
                pending: false,
                fullfilled: false,
                rejected: true
            }
            state.error.message= payload
            state.error.flag= true
        })
    }
})



export default provider_data



