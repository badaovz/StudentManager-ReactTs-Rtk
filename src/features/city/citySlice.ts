import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { City } from "models";
import { ListResponse } from './../../models/common';

export interface initialStateType {
    loading: boolean,
    list: City[],
}

const initialState: initialStateType = {
    loading: false,
    list: [],
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        fetchCitiesStart: (state: initialStateType) => {
            state.loading = true;
        },
        fetchCitiesSuccess(state: initialStateType, action: PayloadAction<ListResponse<City>>) {
            state.loading = false;
            state.list = action.payload.data;
        },
        fetchCitiesFailed(state: initialStateType) {
            state.loading = false;  
        }

    }
})
// city Actions
export const cityActions = citySlice.actions;

//city selector
export const selectCityList = (state: RootState) => state.city.list;

export const selectCityMap = createSelector(selectCityList, (cityList) =>
  cityList.reduce((map: { [key: string]: City }, city) => {
    map[city.code] = city;
    console.log('Map: ', map)
    return map;
  }, {})
);

export const selectCityOptions = createSelector(selectCityList, (cityList) => 
    cityList.map((city) => ({
        label: city.name,
        value: city.code,
    }))
);

const cityReducer = citySlice.reducer;
export default cityReducer;
