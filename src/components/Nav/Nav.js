import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../MyContext';
import { Neon } from '../NeonButton';
import { NavBar } from '../../platforms';
import styles from './Nav.module.scss';

const Nav = () => {
	const { generalData } = useContext(MyContext);
	const { routeMap } = generalData;

	const renderLink = (item, i) => (
		<li key={item.id} tabIndex={i + 1}>
			<Link className={styles.nav__links} to={item.path}>
				{`${item.title}`}
			</Link>
		</li>
	);

	const onClickHandle = e => {
		e.preventDefault();
	};

	const rightHandClickHandle = e => {
		e.preventDefault();
		console.log('right-click');
	};

	return (
		<NavBar className={styles.nav}>
			<div>
				<Neon
					title={'Start'}
					onClickHandle={onClickHandle}
					rightHandClickHandle={rightHandClickHandle}
					tabIndex={0}
				/>
			</div>
			<ul>{routeMap.map(renderLink)}</ul>
		</NavBar>
	);
};

export default Nav;
