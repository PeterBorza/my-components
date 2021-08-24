import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MyContext } from './MyContext';

import { Nav } from './components';
import './App.scss';

const App = () => {
	const { generalData } = useContext(MyContext);

	return (
		<Router>
			<div className='App'>
				<Nav logo='logo' />

				<Switch>
					{generalData.routeMap.map(item => (
						<Route
							key={item.id}
							path={item.path}
							exact={item.exact}
							component={item.component}
						/>
					))}
				</Switch>
			</div>
		</Router>
	);
};

export default App;
