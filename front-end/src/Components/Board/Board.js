import React, { useState } from 'react'
import ToDo from '../ToDo/ToDo'
import Adding from '../Adding/Adding';
import "./Board.css"


export const eventList =[{title:"This is an example", time:"x", 
      description:"Here displays a description of the thing to do. Please click delete button to delete this example."}];

localStorage.setItem("todos", JSON.stringify(eventList));

let newEvent = JSON.parse(localStorage.getItem('todos'));

export default function Board() {

  const [change, setChange] = useState(true);
  
  const eventDeleted = ()=>{
    newEvent = JSON.parse(localStorage.getItem('todos'));  
    
    if(change){
      setChange(false);
    }
    else{
      setChange(true);
    }
    
    console.log("trying rerender");
  }


  return (
    <div>
      <Adding changed ={eventDeleted}/>
      <div className='board'>
          {newEvent.map((item, index) => <ToDo
              key ={index} 
              title={item.title}
              time={item.time}
              description={item.description}
              deleted ={eventDeleted} 
              />)}
      </div>
    </div>
  )
}
