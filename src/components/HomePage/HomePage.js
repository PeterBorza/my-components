import { Link } from 'react-router-dom';
import './HomePage.scss';
import SimpleDrop from '../SimpleDrop';
import { useContext } from 'react';
import { MyContext } from '../../MyContext';

const HomePage = () => {
	const { generalData } = useContext(MyContext);
	return (
		<div className='home-page'>
			<SimpleDrop title='Menu' contentStyle='drop-content'>
				<ul>
					{generalData.routeMap.map(item => (
						<li>
							<Link to={item.path}>{item.title}</Link>
						</li>
					))}
				</ul>
			</SimpleDrop>
		</div>
	);
};

export default HomePage;
