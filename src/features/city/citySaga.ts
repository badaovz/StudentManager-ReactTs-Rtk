import { cityActions } from './citySlice';
import { City, ListResponse } from "models";
import { call, put, takeLatest } from 'redux-saga/effects';
import cityApi from 'api/cityApi';

function* fetchCities() {
    try {
        const response : ListResponse<City> = yield call(cityApi.getAllCities);
        yield put(cityActions.fetchCitiesSuccess(response));
    } catch (err) {
        console.log('Failed to fetch cities list', err);
        yield put(cityActions.fetchCitiesFailed());
    }

}

export default function* citySaga() {
    yield takeLatest(cityActions.fetchCitiesStart.type, fetchCities)
}   