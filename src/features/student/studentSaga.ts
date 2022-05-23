import { PayloadAction } from '@reduxjs/toolkit';
import studentApi from 'api/studentApi';
import { ListParams, ListResponse, Student } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { studentAction } from './studentSlice';

function* fetchStudentList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<Student> = yield call(studentApi.getAllStudent, action.payload);
        yield put(studentAction.fetchStudentListSuccess(response));
    } catch (err) {
        console.log('fetchStudentList Err: ', err)
        yield put(studentAction.fetchStudentListFailed())
    }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
    yield put(studentAction.setFilter(action.payload))
}

export default function* studentSaga() {
    yield takeLatest(studentAction.fetchStudentListStart, fetchStudentList);

    yield debounce(500, studentAction.setFilterWithDebounce.type, handleSearchDebounce)
}