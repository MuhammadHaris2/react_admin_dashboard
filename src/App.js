import React from 'react';
import './app.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';


function App() {
  return (
    <Router>
      <Header />
      <div className="appContainer">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
        </Switch>

      </div>
    </Router>
   );
}

export default App;
