// import logo from './logo.svg';
import "./App.css";
import Header from "./MyComponents/Header"; 
import ToDos from "./MyComponents/ToDos";
import Footer from "./MyComponents/Footer"; 
import AddTodo from "./MyComponents/AddTodo";
import React,{useState} from "react";




function App() {
  const onDelete=(todo)=>{
    // console.log('i am on delete',todo)
    setTodos(todos.filter((id)=>{
      return id!==todo;
    }))
      
  }
  const addTodo=(title,desc)=>{
    console.log(title,desc)
    const myTodos = {
        // sno : sno,
        title : title,
        desc : desc,
      }
      setTodos([...todos,myTodos]); //add myTodos inside todos
  }

 const[todos,setTodos] = useState([]);


  return (
   <>
   
   <Header title = "My To Dos List" searchBar={true}/>
   <AddTodo addTodo={addTodo}/>
   <ToDos todos={todos} onDelete={onDelete} />
   <Footer />
   </>
  ); 
}

export default App;
