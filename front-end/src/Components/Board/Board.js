import React from 'react'
import ToDo from '../ToDo/ToDo'
import "./Board.css"


export default function Board() {
  return (
    <div className='board'>
        <ToDo/>
        <ToDo/>
        <ToDo/>
        <ToDo/>
        <ToDo/><ToDo/><ToDo/><ToDo/>
    </div>
  )
}
