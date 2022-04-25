import { Counter } from '../components/Counter';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCountersItems } from '../store/counter/selectors';


export const Home = (): JSX.Element => {
	const items = useSelector(selectCountersItems);

	return (
		<ContentItems>
			{
				items.map(item =>
					<Counter key={item.id}
							 id={item.id}
							 value={item.value}
							 isActive={item.isActive}/>
				)
			}
		</ContentItems>
	);
};

const ContentItems = styled.div`
  display: grid;
  grid-template: auto / repeat(auto-fill, minmax(190px, 1fr));
  grid-gap: 2rem;
`;