import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCounter } from '../store/counter/actions';


export const Header = (): JSX.Element => {
	const dispatch = useDispatch();

	const addCounterItem = (): void => {
		dispatch(addCounter());
	};

	return (
		<HeaderComponent>
			<Title>Counters</Title>

			<AddButton onClick={addCounterItem}>Add Counter</AddButton>
		</HeaderComponent>
	);
};

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`;

const AddButton = styled.button`
  background-color: #39a139;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  text-transform: uppercase;
  border-radius: 1rem;
  transition: background-color .2s linear;

  &:hover {
    background-color: #1d7a1d;
  }
`;