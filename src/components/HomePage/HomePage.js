import { Link } from 'react-router-dom';
import { MyContext } from '../../MyContext';
import { useContext } from 'react';
import './HomePage.scss';

const HomePage = () => {
	const { counter, setCounter } = useContext(MyContext);
	return (
		<div className='home-page'>
			<h1>HomePage</h1>
			<div className='content-menu'>
				<ul>
					<li>
						You must <Link to='/login'>login</Link> here
					</li>
					<li>
						See my <Link to='/businesscard'>businesscard</Link> here
					</li>
					<li>
						Have some <Link to='/fruitcard'>fruits</Link> here
					</li>
					<li>
						Here is a <Link to='/quiz'>quiz</Link> for you
					</li>
					<li>
						This <Link to='/flipbox'>flipbox</Link> is awesome
					</li>
					<li>
						Check out this <Link to='/glowbutton'>button</Link>{' '}
					</li>
					<li>
						Have a look at this{' '}
						<Link to='/simpledrop'>dropdown</Link> over here
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
