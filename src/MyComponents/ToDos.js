import React from 'react'
import ToDoItem from "./ToDoItem";

const ToDos = (props) => { 

  return (
    
    <div className='container' >
      <h3 className='my-3'> <li> Todos List</li></h3>
      {/* {props.todos.map((todos)=> <ToDoItem todo ={todos}/>)}*/}{/*shortcut*/}
      {props.todos.length===0? "No todos to display": props.todos.map((todo)=>{
        return (
          <>
        <ToDoItem todo ={todo } key={todo.sno} onDelete ={props.onDelete} /> <hr /> 
        </>) 
         
      }
      )}
      
      
     </div>  
  )
}
 
export default ToDos; 