import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "redux-first-history";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authAction, LoginPayload } from "./authSlice";


function* handleLogin(payload: LoginPayload) {
    try {
        yield delay(1000);
        localStorage.setItem('token', 'token')
        yield put(authAction.loginSuccess({
            id: 1,
            userName: 'dao',
            password: '1111'
        }));
        yield put(push('/admin/dashboard'))
    } catch (err) {
        yield put(authAction.loginFailed((err as Error).message))
    }


}

function* handleLogout() {
    yield delay(500);
    localStorage.removeItem('token');
    // yield 
    yield put(push('/login'))
    console.log('logout');
}

function* watchLoginFlow() {
    while(true){
        const isLogin = Boolean(localStorage.getItem('token'));
        if(!isLogin){
            const action: PayloadAction<LoginPayload> = yield take(authAction.loginStart.type);
            yield fork(handleLogin, action.payload);

        }
    
        yield take(authAction.logout.type);
        yield call(handleLogout);

    }

}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}