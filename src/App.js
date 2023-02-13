import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './contexts/AppProvider';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={ Home } />
      </Switch>
    </AppProvider>
  );
}

export default App;
