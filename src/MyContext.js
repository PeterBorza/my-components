import { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import BusinessCard from './components/BusinessCard/BusinessCard';
import FruitCard from './components/FruitCard/FruitCard';
import Fruit from './components/Fruit/Fruit';
import Quiz from './components/Quiz/Quiz';
import ArrayState from './components/ArrayState/ArrayState';
import FlipBox from './components/FlipBox';

import apple from './images/apple.jpg';
import orange from './images/orange.jpg';
import lemon from './images/lemon.jpg';
import apricot from './images/apricots.jpg';
import pear from './images/pear.jpg';
import mango from './images/mango.jpg';
import bananas from './images/bananas.jpg';
import grapes from './images/grapes.jpg';

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
	const generalData = {
		persons: [
			{
				name: 'Baloon5',
				age: '20',
				occupation: 'musician/band',
				id: uuid(),
			},
			{
				name: 'Deftones',
				age: '30',
				occupation: 'musician/band',
				id: uuid(),
			},
			{
				name: 'Peter',
				age: '42',
				occupation: 'software developer intern',
				id: uuid(),
			},
			{
				name: 'Woody Harrelson',
				age: '65',
				occupation: 'actor',
				id: uuid(),
			},
		],
		data: [
			{
				id: uuid(),
				title: 'apple',
				source: apple,
			},
			{
				id: uuid(),
				title: 'orange',
				source: orange,
			},
			{
				id: uuid(),
				title: 'lemon',
				source: lemon,
			},
			{
				id: uuid(),
				title: 'apricot',
				source: apricot,
			},
			{
				id: uuid(),
				title: 'pear',
				source: pear,
			},
			{
				id: uuid(),
				title: 'mango',
				source: mango,
			},
			{
				id: uuid(),
				title: 'bananas',
				source: bananas,
			},
			{
				id: uuid(),
				title: 'grapes',
				source: grapes,
			},
		],
		routeMap: [
			{
				path: '/',
				component: HomePage,
				title: 'Home',
				exact: true,
				id: uuid(),
			},
			{
				path: '/login',
				component: Login,
				title: 'Login',
				exact: false,
				id: uuid(),
			},
			{
				path: '/businesscard',
				component: BusinessCard,
				title: 'Business-Card',
				exact: false,
				id: uuid(),
			},
			{
				path: '/fruits',
				component: FruitCard,
				title: 'Fruits',
				exact: true,
				id: uuid(),
			},
			{
				path: '/shop',
				component: Quiz,
				title: 'Quiz',
				exact: false,
				id: uuid(),
			},
			{
				path: '/state',
				component: ArrayState,
				title: 'state',
				exact: false,
				id: uuid(),
			},
			{
				path: '/flipbox',
				component: FlipBox,
				title: 'FlipBox',
				exact: false,
				id: uuid(),
			},
			{
				path: '/fruits/:id',
				component: Fruit,
				title: '',
				exact: false,
				id: uuid(),
			},
		],
	};

	const [counter, setCounter] = useState(0);

	return (
		<MyContext.Provider value={{ generalData, counter, setCounter }}>
			{children}
		</MyContext.Provider>
	);
};
