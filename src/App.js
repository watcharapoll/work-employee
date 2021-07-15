import React from "react";
import './App.css'
import CreateTest from './components/CreateTest'
import ViewTest from './components/ViewTest'
import EditTest from './components/EditTest'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <div className="Navbar">
          <div className="Navbar__left">Web Employee</div>
          <div className="Navbar__right">
            <ul>
              <li>
                <Link to="/" >สมัครสมาชิก</Link>
              </li>
              <li>
                <Link to="/view">รายชื่อ</Link>
              </li>
            </ul>
          </div>
        </div>
          <Switch>
            <Route path="/" exact>
              <CreateTest></CreateTest>
            </Route>
            <Route path="/view">
              <ViewTest></ViewTest>
            </Route>
            <Route path="/edit">
              <EditTest></EditTest>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
