import { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';
import {
	HomePage,
	Login,
	BusinessCard,
	FruitCard,
	Fruit,
	Quiz,
	ArrayState,
	FlipBox,
	SimpleDrop,
	HoverImage,
} from './components';

import apple from './images/apple400.jpg';
import orange from './images/orange400.jpg';
import lemon from './images/lemon400.jpg';
import apricot from './images/apricots400.jpg';
import pear from './images/pear400.jpg';
import mango from './images/mango400.jpg';
import bananas from './images/bananas400.jpg';
import grapes from './images/grapes400.jpg';
import baloons from './images/baloons400.jpg';
import deftones from './images/deftones400.jpg';
import peter from './images/peter400.jpg';
import wood from './images/wood400.jpg';
import wheels from './images/wheels400.jpg';

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
	const generalData = {
		persons: [
			{
				name: 'Baloon5',
				age: '20',
				occupation: 'musician/band',
				photo: baloons,
				id: uuid(),
			},
			{
				name: 'Deftones',
				age: '30',
				occupation: 'musician/band',
				photo: deftones,
				id: uuid(),
			},
			{
				name: 'Peter',
				age: '42',
				occupation: 'frontend developer',
				photo: peter,
				id: uuid(),
			},
			{
				name: 'Woody Harrelson',
				age: '65',
				occupation: 'actor',
				photo: wood,
				id: uuid(),
			},
			{
				name: 'Brainiac',
				age: 'ageless',
				occupation: 'brainer',
				photo: wheels,
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
				path: '/quiz',
				component: Quiz,
				title: 'Quiz',
				exact: false,
				id: uuid(),
			},
			{
				path: '/state',
				component: ArrayState,
				title: 'State',
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
				path: '/simpledrop',
				component: SimpleDrop,
				title: 'Drop',
				exact: false,
				id: uuid(),
			},
			{
				path: '/image',
				component: HoverImage,
				title: 'Image',
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
