import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListParams, ListResponse, PaginationParams, Student } from "models";

export interface initialStateType {
    isLoading: boolean,
    studentList: Student[],
    filter: ListParams,
    pagination: PaginationParams

}

const initialState: initialStateType = { 
    isLoading: false,
    studentList: [],
    filter: {
        _page: 1,
        _limit: 15,
    },
    pagination: {
        _page: 1,
        _limit: 15,
        _totalRows: 15
    }
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        fetchStudentListStart: (state, action: PayloadAction<ListParams>) => {
            state.isLoading = true;
        },
        fetchStudentListSuccess: (state, action: PayloadAction<ListResponse<Student>>) => {
            state.studentList = action.payload.data;
            state.pagination = action.payload.pagination;
            state.isLoading = false;
        },
        fetchStudentListFailed: (state) => {
            state.isLoading = false;
        },
        setFilter: (state, action:PayloadAction<ListParams>) => {
            state.filter = action.payload;
        },

        setFilterWithDebounce: (state, action: PayloadAction<ListParams>) => {}
        
    }
});

export const studentAction = studentSlice.actions;
const studentReducer = studentSlice.reducer;

export default studentReducer;

