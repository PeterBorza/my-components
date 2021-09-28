import React from 'react';
import styles from './NavBar.module.scss';
import classNames from 'classnames';

const NavBar = ({ children, className }) => {
	const classes = classNames(className, styles.nav);
	return <nav className={classes}>{children}</nav>;
};

export default NavBar;
