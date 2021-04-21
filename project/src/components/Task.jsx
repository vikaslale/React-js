import React,{useState}from 'react';
import './Task.css';
import List from './List';
const Task = ()=>{
    const [inputList,setInputList] = useState(" ");
    const [Items, setItems] = useState([]);
    const itemEvent =(event)=>{
        setInputList(event.target.value);
    };

    const listOfItems =()=>{
        setItems((oldItems) =>{
            return[...oldItems,inputList]
        });
        setInputList("");
    };

    const deleteItems = (id)=>{
        console.log("deleted");

        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !==id;
            })
        })
    };
    return (
        <> 
        <div className="App">
            <h1>Task Page</h1>
            <h2>Please type sentence and add Stack</h2>
        <input type="text" placeholder="Add a items"
        value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItems}>Add</button>


       <ol>
        {
         Items.map( (itemval,index)=>{
               return <List
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}/>;  
             }) }
          
             </ol>
         </div>
         </>
    );
};
export default Task;
