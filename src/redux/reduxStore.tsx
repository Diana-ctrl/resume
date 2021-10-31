import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';

export type StoreType = typeof store;
export type AppStateType = ReturnType<typeof rootReduser>;

let rootReduser = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
});

let store = createStore(rootReduser);

export default store;



