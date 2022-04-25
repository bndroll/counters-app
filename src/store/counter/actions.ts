import { CounterConstants } from './reducer';


const inferLiteralFromString = <T extends string>(arg: T): T => arg;

export const addCounter = () => ({
	type: inferLiteralFromString(CounterConstants.ADD_COUNTER)
});

export const removeCounter = (id: string) => ({
	type: inferLiteralFromString(CounterConstants.REMOVE_COUNTER),
	payload: id
});

export const incrementCounter = (id: string) => ({
	type: inferLiteralFromString(CounterConstants.INCREMENT_COUNTER),
	payload: id
});

export const decrementCounter = (id: string) => ({
	type: inferLiteralFromString(CounterConstants.DECREMENT_COUNTER),
	payload: id
});

export type CounterActionsType =
	| ReturnType<typeof addCounter>
	| ReturnType<typeof removeCounter>
	| ReturnType<typeof incrementCounter>
	| ReturnType<typeof decrementCounter>
