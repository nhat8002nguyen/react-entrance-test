import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Employee from './views/EmployeeView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout } from 'antd';
import AppHeader from './views/components/AppHeader';
import AppFooter from './views/components/AppFooter';

const { Header, Footer } = Layout;

function App() {



  return (
		<Router>
			<Layout>
				<AppHeader /> 
				<Route path="/" exact><Main /></Route>
				<Route path="/employees/:id">
					<Employee />
				</Route>
				<AppFooter />
			</Layout>
		</Router>
  );
}

export default App;
