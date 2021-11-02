import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/about';
import Art from './pages/art';
import Clothes from './pages/clothes';
import CommingSoon from './pages/comming';
import Designs from './pages/designs';
import Keychains from './pages/keychains';
import ShopBy from './pages/shopby';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path ='/art' component={Art}/>
        <Route path ='/clothes' component={Clothes}/>
        <Route path ='/comming' component={CommingSoon}/>
        <Route path ='/designs' component={Designs}/>
        <Route path ='/keychains' component={Keychains}/>
        <Route path ='/shopby' component={ShopBy}/>
      
      </Switch>
    </Router>
  );
}

export default App;
