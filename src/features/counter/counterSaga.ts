import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('wait 2s');
    yield delay(2000);
    console.log('waiting success');
    yield put(incrementSagaSuccess(action.payload));
}


export default function* counterSaga() {
    console.log('ToString: ', incrementSaga.toString());
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}