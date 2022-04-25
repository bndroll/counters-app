import { v4 as uuidv4 } from 'uuid';
import { ICounter } from './types';
import { CounterActionsType } from './actions';


export enum CounterConstants {
	ADD_COUNTER = 'ADD_COUNTER',
	REMOVE_COUNTER = 'REMOVE_COUNTER',
	INCREMENT_COUNTER = 'INCREMENT_COUNTER',
	DECREMENT_COUNTER = 'DECREMENT_COUNTER'
}

export interface ICounterState {
	items: ICounter[];
}

const initialState: ICounterState = {
	items: []
};

export const counterReducer = (state = initialState, action: CounterActionsType): ICounterState => {
	switch (action.type) {
		case CounterConstants.ADD_COUNTER: {
			const totalSum = state.items.reduce((sum: number, item: ICounter) => sum + item.value, 0);

			const newCounterItem: ICounter = {
				id: uuidv4(),
				value: totalSum,
				isActive: (state.items.length + 1) % 4 !== 0 || state.items.length === 0
			};

			return {
				...state,
				items: [...state.items, newCounterItem]
			};
		}

		case CounterConstants.REMOVE_COUNTER: {
			return {
				...state,
				items: [...state.items.filter((item: ICounter) => item.id !== action.payload)]
			};
		}

		case CounterConstants.INCREMENT_COUNTER: {
			const newItems = state.items.map((item: ICounter) => {
				if (item.id === action.payload)
					item.value++;

				return item;
			});

			return {
				...state,
				items: newItems
			};
		}

		case CounterConstants.DECREMENT_COUNTER: {
			const newItems = state.items.map((item: ICounter) => {
				if (item.id === action.payload)
					item.value--;

				return item;
			});

			return {
				...state,
				items: newItems
			};
		}

		default: {
			return {
				...state
			};
		}
	}
};