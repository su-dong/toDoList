import React, { useState } from 'react'
import ToDo from '../ToDo/ToDo'
import "./Board.css"


export const eventList =[
  {title:"study", time:'20', description:"study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study"},
  {title:"study2", time:'200', description:"study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study study"}
];

localStorage.setItem("todos", JSON.stringify(eventList));

let newEvent = JSON.parse(localStorage.getItem('todos'));
console.log("rerender");

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
    <div className='board'>
        {newEvent.map((item, index) => <ToDo
            key ={index} 
            title={item.title}
            time={item.time}
            description={item.description}
            deleted ={eventDeleted} 
            />)}
    </div>
  )
}
