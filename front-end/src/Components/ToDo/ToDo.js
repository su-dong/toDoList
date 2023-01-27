import React from 'react'
import "./ToDo.css"

export default function ToDo() {
  return (
    <div className='todo'>
        <div className='title'>this is title</div>
        <div className='card'>
            <div className='time'>20 min</div>
            <div className='description'>
                study study study study study 
                study study study study study 
                study study study study study 
                study study study study study 
                study study study study study 
                study study study study study 
                study study study study study 
                </div>
            <button className='btn'>Delete</button>
        </div>
    </div>
  )
}
