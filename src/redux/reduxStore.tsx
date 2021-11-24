import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReduser from './auth-reduser'; 

export type AppStateType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReduser,
});

let store = createStore(rootReducer);

export default store;



