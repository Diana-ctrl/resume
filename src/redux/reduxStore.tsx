import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogsReduser';
import profileReduser from './profileReduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
});

let store = createStore(redusers);

export default store;

export type StoreType = typeof store;
export type AppStateType = ReturnType<typeof store.getState>;

