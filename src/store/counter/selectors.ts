import { ICounterState } from './reducer';
import { AppStateType } from '../store';


export const selectCounters = (state: AppStateType): ICounterState => state.counters;

export const selectCountersItems = (state: AppStateType): ICounterState['items'] => selectCounters(state).items;