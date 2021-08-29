import { useContext } from 'react';
import { MyContext } from '../../MyContext';
import styles from './BusinessCard.module.scss';

const BusinessCard = () => {
	const { generalData } = useContext(MyContext);
	const { businessCard, container, infoContainer } = styles;

	return (
		<div className={container}>
			{generalData.persons.map(
				({ name, age, occupation, photo, id }, i) => (
					<div key={id} className={businessCard}>
						<img src={photo} alt={name} />
						<div className={infoContainer}>
							<h2>{name}</h2>
							<p>
								Age: <span>{age}</span>
							</p>
							<p>
								Occupation: <span>{occupation}</span>
							</p>
							<p>
								Id: <span>{i + 1}</span>
							</p>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default BusinessCard;
