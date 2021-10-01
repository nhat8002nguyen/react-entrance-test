import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Employee from './views/EmployeeView';
import { useDispatch } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout } from 'antd';
import AppHeader from './views/components/AppHeader';
import AppFooter from './views/components/AppFooter';
import { fetchEmployees, fetchFilterData } from './redux/actions/homeActions';


function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchEmployees());
		dispatch(fetchFilterData());
	}, [])

  return (
		<Router>
			<Layout>
				<AppHeader /> 
				<Route path="/" exact>
					<Main />
				</Route>
				<Route path="/employees/:id">
					<Employee />
				</Route>
				<AppFooter />
			</Layout>
		</Router>
  );
}

export default App;
