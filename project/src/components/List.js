import React,{useEffect} from "react"

const  List=(props)=>{
   /* const[studentList, setStudentList] = useState([]); */
  useEffect(()=>{
      async function fetchStudentList(){
           try{
               const requesUrl ="http://jsonplaceholder.typicode.com/todos";
               const response = await fetch(requesUrl);
               const responseJSON = await response.json();
               console.log(responseJSON);
           } catch{

           }
      }
      fetchStudentList();
  },[]);
  return (
      <>
       <button className="delete" 
      onClick={()=>{
          props.onSelect(props.id);
       }}>Delete</button>
  <li>
      {props.text}</li>;
      </>
  )
};
export default List;