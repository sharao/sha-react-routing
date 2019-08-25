import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={A}/>
      <Route exact path="/B" component={B}/>
    </Switch>
  );
}

const A =()=>{
  return(
    <div>Component A... 
      <Link to='/B' >Link to B</Link>
    </div>
  )
}


const B =()=>{
  return(
    <div>Component B... 
      <Link to='/' >Link to A</Link>
    </div>
  )
}

export default App;
