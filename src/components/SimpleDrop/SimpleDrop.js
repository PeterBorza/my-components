import { useState, useEffect, useRef } from 'react';
import './SimpleDrop.scss';
import classNames from 'classnames';

const SimpleDrop = ({ children, title = 'Click', contentStyle }) => {
	const [drop, setDrop] = useState(false);
	const headerRef = useRef(null);
	const classes = classNames(
		'content',
		{
			'content--drop': drop,
			'white-bg': !contentStyle,
		},
		contentStyle
	);

	useEffect(() => {
		window.addEventListener('click', e => {
			e.target !== headerRef.current && setDrop(false);
		});
		return window.removeEventListener('click', () => {});
	}, [headerRef, setDrop]);

	return (
		<div className='dropdown-container'>
			<div
				className='header'
				onClick={() => setDrop(!drop)}
				ref={headerRef}
			>
				<h3>{title}</h3>
			</div>
			<div className={classes}>{children}</div>
		</div>
	);
};

export default SimpleDrop;
