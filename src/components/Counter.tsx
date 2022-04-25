import React, { useEffect } from 'react';
import styled from 'styled-components';
import removeIcon from '../assets/remove.svg';
import { useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, removeCounter } from '../store/counter/actions';


export interface ICounterProps {
	id: string;
	value: number;
	isActive: boolean;
}

export const Counter: React.FC<ICounterProps> = ({id, value, isActive}: ICounterProps): JSX.Element => {
	const dispatch = useDispatch();

	useEffect(() => {
		let timerId: NodeJS.Timer;

		if (!isActive)
			timerId = setInterval(() => dispatch(incrementCounter(id)), 1000);

		return () => {
			if (!isActive)
				clearInterval(timerId);
		};
	}, []);

	const removeCounterHandler = (): void => {
		dispatch(removeCounter(id));
	};

	const incrementCounterHandler = (): void => {
		dispatch(incrementCounter(id));
	};

	const decrementCounterHandler = (): void => {
		dispatch(decrementCounter(id));
	};

	return (
		<CounterItem>
			<RemoveIconContainer>
				<RemoveIcon src={removeIcon} alt="remove counter" onClick={removeCounterHandler}/>
			</RemoveIconContainer>

			<CounterValue>{value}</CounterValue>

			<CounterButtonsContainer>
				{
					isActive ?
						<>
							<Button color={'red'} onClick={decrementCounterHandler}>-</Button>
							<Button color={'green'} onClick={incrementCounterHandler}>+</Button>
						</>
						:
						<></>
				}
			</CounterButtonsContainer>
		</CounterItem>
	);
};

export const CounterItem = styled.div`
  width: 12rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #252525;
  border-radius: 1rem;
`;

export const RemoveIconContainer = styled.div`
  width: 100%;
  text-align: right;
  padding: 0.5rem 0.5rem 0 0;
`;

export const RemoveIcon = styled.img`
  cursor: pointer;
  width: 1.5rem;
`;

export const CounterValue = styled.div`
  font-size: 5rem;
  font-weight: 500;
  text-align: center;
  flex: 1 1 auto;
  margin: 1.7rem 0;
`;

export const CounterButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 0 1rem 1rem 0;
`;

export const Button = styled.button`
  font-size: 3rem;
  color: #ffffff;
  font-weight: 500;
  width: 50%;
  transition: background-color .2s linear;

  &:hover {
    background-color: ${(props) => (props.color === 'red' ? '#ff3e3e' : '#32bd32')}
  }

  border-radius: 0 0 ${(props) => props.color === 'green' ? '1rem 0' : '0 1rem'};
  background-color: ${(props) => (props.color === 'red' ? '#da3a3a' : '#39a139')}
`;