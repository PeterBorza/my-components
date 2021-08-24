import { useParams, Link } from 'react-router-dom';
import { MyContext } from '../../MyContext';
import styles from './Fruit.module.scss';
import { useContext } from 'react';

const Fruit = () => {
	const { generalData } = useContext(MyContext);
	const { id } = useParams();
	return (
		<div className={styles.fruitBox}>
			<img src={generalData.data[id].source} alt='fruit' width='50%' />
			<p>{generalData.data[id].title}</p>
			<Link to='/fruits'>Go back...</Link>
		</div>
	);
};

export default Fruit;
