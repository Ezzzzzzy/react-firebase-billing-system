import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import PrivateRoute from "./route/PrivateRoute"
import PublicRoute from "./route/PublicRoute"
import Login from './modules/Login/login'
import Logout from './modules/Logout/logout'
import Dashboard from './modules/Dashboard/dashboard'
import AuthLoading from './modules/components/AuthLoading'

function App() {
  return (
    <Provider store={store}>
      <AuthLoading>
        <Router>
          <Switch>
            <PublicRoute component={Login} restricted={true} path="/login" />
            <PrivateRoute component={Dashboard} path="/" />
            <PublicRoute component={Logout} restricted={false} path="/logout" />
          </Switch>
        </Router>
      </AuthLoading>
    </Provider>
  );
}

export default App