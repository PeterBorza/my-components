import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, desc, year, handleDelete }) => {
	return (
		<div className={styles.cardStyle}>
			<div className={styles.titles}>
				<h2>{title}</h2>
				<i className='fas fa-trash-alt' onClick={handleDelete}></i>
			</div>
			<div>
				<h3>{desc}</h3>
				<h4>{year}</h4>
			</div>
		</div>
	);
};

export default Card;
