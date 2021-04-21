import React from 'react'
import './App.css';
import Home from './components/home';
import Reset from './components/Reset';
import Task from './components/Task';
import User from './components/User';
import {Switch,Route} from "react-router-dom";
import Navbar from './navnar';

const App =()=>{
   return(
     <>
      <Navbar/>
       <Switch>
        <Route path="/Reset" component={Reset}/>
          <Route path="/Home" component={Home}/>
            <Route path="/Task" component={Task}/>
              <Route path="/User" component={User}/>
         </Switch>
     </>
   );
};

export default App;
