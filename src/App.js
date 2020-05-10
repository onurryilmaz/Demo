import React from 'react';
import {Route, Switch} from 'react-router-dom'


//Component Page
import Header from './pages/partials/header'
import Home from './pages/home'


function App() {

  return (
    <div className='demo-container'>
      <Header/>
      <main>
        <Switch>
          <Route path='/' exact strict component={Home}/>
    
          <Route component={Error}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
