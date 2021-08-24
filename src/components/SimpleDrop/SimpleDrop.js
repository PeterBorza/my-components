import { useState } from 'react';
import './SimpleDrop.scss';
import classNames from 'classnames';

const SimpleDrop = ({ children, title }) => {
	const [drop, setDrop] = useState(false);
	const classes = classNames('content', { 'content--drop': drop });
	return (
		<div className='dropdown-container'>
			<div className='header' onClick={() => setDrop(!drop)}>
				<h3>Click{title}</h3>
			</div>
			<div className={classes}>{children}</div>
		</div>
	);
};

export default SimpleDrop;
