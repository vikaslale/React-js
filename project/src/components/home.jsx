import React,{Component} from 'react';


class Home extends Component{
   
   render(){    
    return (
        <>
         <div>
           
             <center>
        <h1>Home Page</h1>
          <select>
              <option value="grapefruit">nodejs</option>
              <option value="lime">reactjs</option>
              <option selected value="javascript">
                  javascript
                  </option>
              </select>
   
              </center>
             </div>
        </>
    );
   }
};
export default Home;
