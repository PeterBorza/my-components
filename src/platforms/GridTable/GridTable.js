import React from 'react';
import styles from './GridTable.module.scss';

const GridTable = ({ children }) => {
	return <div className={styles['grid-layout-table']}>{children}</div>;
};

export default GridTable;
