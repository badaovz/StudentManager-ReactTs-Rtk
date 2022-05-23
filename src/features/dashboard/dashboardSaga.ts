import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import { City, ListResponse, Student } from 'models';
import { all, call, put, takeLatest } from "redux-saga/effects";
import { dashboardAction, RankingCity } from "./dashboardSlice";

function* fetchStatistic() {
    const responseList: Array<ListResponse<Student>> = yield all([
        call(studentApi.getAllStudent, {_page: 1, _limit: 1, gender: 'male'}),
        call(studentApi.getAllStudent, {_page: 1, _limit: 1, gender: 'female'}),
        call(studentApi.getAllStudent, {_page: 1, limit: 1, mark_gte: 8}),
        call(studentApi.getAllStudent, {_page: 1, _limit: 1, mark_lte: 5}),
    ]);

    const statisticList = responseList.map(i => i.pagination._totalRows);
    const [maleCount, femaleCount, highMarkCount, lowMarkCount ] = statisticList;
    yield put(dashboardAction.setStatistic({maleCount, femaleCount, highMarkCount, lowMarkCount}));
}

function* fetchHighestStudentList() {
    const { data }:ListResponse<Student> = yield call(studentApi.getAllStudent, {
        _page: 1, 
        _limit: 5,
        _sort: 'mark',
        _order: 'desc',
    });

    yield put(dashboardAction.setHighestStudentList(data));
}

function* fetchLowestStudentList() {
    const {data} : ListResponse<Student> = yield call(studentApi.getAllStudent, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'asc'
    });

    yield put(dashboardAction.setLowestStudentList(data));
}

function* fetchRankingByCityList() {
    const { data:cityList }: ListResponse<City> = yield call(cityApi.getAllCities);

    const callList = cityList.map(i => call(studentApi.getAllStudent, {
        _page: 1,
        _limit: 5,
        _sort: 'mark',
        _order: 'desc',
        city: i.code
    }));

    const ListResponse: Array<ListResponse<Student>> = yield all(callList);

    const cityRankingList: Array<RankingCity> = ListResponse.map((i, index) => ({
        cityId: cityList[index].code,
        cityName: cityList[index].name,
        rankList: i.data
    }));

    yield put(dashboardAction.setRankingCity(cityRankingList));

}

function* fetchDashboardData() {
    try {
        yield all([
            call(fetchStatistic),
            call(fetchHighestStudentList),
            call(fetchLowestStudentList),
            call(fetchRankingByCityList)
        ]);
        yield put(dashboardAction.fetchDataSuccess());
    } catch (err) {
        console.log('fetch dashboard data failed with err: ', err);
        yield put(dashboardAction.fetchDataFailed())
    }
}

export default function* dashboardSaga() {
    yield takeLatest(dashboardAction.fetchDataStart.type, fetchDashboardData);
}