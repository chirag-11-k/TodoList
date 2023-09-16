import React, { useState } from "react";
const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState(""); 
    const submit =(Event)=>{
      Event.preventDefault();
      if(!title || !desc){
        alert("Title/Description can't be blank");
      }
      addTodo(title,desc);
    }
  return (
    <div className="container my-3">
      <h3> 
        
          <li>Add new ToDo</li>
      </h3>
      {/* submit is function calling , it is not object so you can't pass like this {{sumbit}} */}
      <form onSubmit={submit}> 
        <div className="form-group ">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(Event)=>setTitle(Event.target.value)}
            className="form-control"
            id="title"
            placeholder="Add title"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            value={desc }
            onChange={(Event)=>setDesc(Event.target.value)}
            className="form-control"
            id="desc"
            placeholder="Add your todo here"
          />
        </div>
        <button type="submit" className="btn btn-dark btn-sm my-2">
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
