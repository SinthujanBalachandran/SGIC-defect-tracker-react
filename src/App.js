import React from 'react';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddProject from './components/AddProject';
import ViewProject from './components/ViewProject';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
        
      </div>

      <div>
        <Sidebar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addProject" component={AddProject}/>
          <Route path="/viewProject" component={ViewProject}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
