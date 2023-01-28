import React from 'react'
import "./ToDo.css"
import {RiDeleteBin6Line} from 'react-icons/ri'

export default function ToDo(props) {


  const handleClick = (e)=>{
    let localEvent = JSON.parse(localStorage.getItem('todos'));

    console.log(localEvent);

    let newEvent =[];

    for(var i = 0; i < localEvent.length; i++){
      let item = localEvent[i];
      if(JSON.stringify(item) === JSON.stringify({title:props.title, time:props.time, description:props.description})){
        console.log("delete")
      }
      else{
        newEvent.push(item)
      }

    }

    localStorage.setItem("todos", JSON.stringify(newEvent));
    props.deleted();

  }

  return (
    <div className='todo'>
        <div className='title'>{props.title}</div>
        <div className='card'>
            <div className='time'>{props.time} <hr></hr>Min</div>
            <div className='description'>
                {props.description}
                </div>
            <button onClick={handleClick} className='btn'><RiDeleteBin6Line/></button>
        </div>
    </div>
  )
}
