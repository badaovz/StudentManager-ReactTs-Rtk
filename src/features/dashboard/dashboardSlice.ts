import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Student } from "models/student";

export interface dashboardStatistics {
    maleCount: number,
    femaleCount: number,
    highMarkCount: number,
    lowMarkCount: number,

}

export interface RankingCity {
    cityId: number | string,
    cityName: string,
    rankList: Student[],
}

export interface initialStateType {
    isLoading: boolean,
    statistics: dashboardStatistics,
    highestMarkStudentList: Student[],
    lowestMarkStudentList: Student[],
    rankingByCity: RankingCity[],
}

const initialState:initialStateType = {
    isLoading: false,
    statistics: {
        maleCount: 0,
        femaleCount: 0,
        highMarkCount: 0,
        lowMarkCount: 0,
    },
    highestMarkStudentList: [],
    lowestMarkStudentList: [],
    rankingByCity: [],
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.isLoading = true;
        },
        fetchDataSuccess: (state) => {
            state.isLoading = false;
        },
        fetchDataFailed: (state) =>{
            state.isLoading = false;
        },

        setStatistic: (state, action: PayloadAction<dashboardStatistics>) => {
            state.statistics = action.payload;
        },
        setHighestStudentList: (state, action: PayloadAction<Student[]>) => {
            state.highestMarkStudentList = action.payload;
        },
        setLowestStudentList: (state, action: PayloadAction<Student[]>) => {
            state.lowestMarkStudentList = action.payload;
        },
        setRankingCity: (state, action: PayloadAction<RankingCity[]>) => {
            state.rankingByCity = action.payload;
        }

    },
});

export const dashboardAction = dashboardSlice.actions;


const dashboardReducer = dashboardSlice.reducer;

export default dashboardReducer;