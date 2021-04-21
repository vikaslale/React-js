import React from 'react';
import Reset from './Reset';
import {BrowserRouter as Router,Route} from 'react-router-dom';
const Home = ()=>{
    return (
        <>
        <div>
        <Router>
        
            <center>
                <form>
                 
        <h1>User Page</h1>
          <br/>
          <br/>
       
        Enter Name: <input type="text" placeholder="enter name" name="n1"/>
        <br/>
        <br/>
         Enter password: <input type="text" placeholder="enter  password" name="n2"/> <br/>
        <br/>
        <br/>
         <button> <a href='./Reset'>Reset</a></button>    <button>Login</button>
     
                 <Route path="./Login" component={Reset}></Route>
                </form>
                </center>
             </Router>

             </div>

        </>
    );
};
export default Home;
