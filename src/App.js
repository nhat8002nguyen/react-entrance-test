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

function App() {


  return (
		<Router>
			<Route path="/" exact><Main /></Route>
			<Route path="/employees/:id">
				<Employee />
			</Route>
		</Router>
  );
}

export default App;
