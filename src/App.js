import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Moviedetails from './pages/Moviedetails';

const App = () => {
  return (
    <div className='Wrapper'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/movie-details' component={Moviedetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
