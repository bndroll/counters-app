import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counter/reducer';


export const rootReducer = combineReducers({
	counters: counterReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);