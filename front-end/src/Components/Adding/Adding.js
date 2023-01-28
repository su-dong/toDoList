import React, { useState } from 'react'
import "./Adding.css"

export default function Adding(props) {
    const [clicked, setClicked] = useState(false);
    const [title, setTitle] = useState("");
    const [time, setTime]=useState(0);
    const [des, setDes]=useState("");

    const handleClicked = (e) =>{
        if(clicked){
            setClicked(false);
        }
        else{
            setClicked(true);
        }
    }

    const handleSubmit = (e) =>{
        if(clicked){
            setClicked(false);
        }
        else{
            setClicked(true);
        }
        let localData = JSON.parse(localStorage.getItem("todos"));
        localData.push({title:title, time:time, description:des});
        localStorage.setItem('todos', JSON.stringify(localData));
        props.changed();
    }
    
  
    if(clicked){
        return(
            <div>
                <form onSubmit={handleSubmit} className='form'>
                    <label>
                        <p>Title:</p>
                        <input type='text' 
                            onChange={(e)=>{setTitle(e.target.value)}} 
                            name ='title' required/>
                    </label>
                    <label>
                        <p>Time:(min)</p>
                        <input type='number' 
                            onChange={(e)=>{setTime(e.target.value)}}
                            name ='time' required/>
                    </label>
                    <label>
                        <p>Description:</p>
                        <textarea type='text' 
                            onChange={(e)=>{setDes(e.target.value)}}
                            name ='description'required maxLength={130}/>
                    </label>

                    <input className='subBtn' type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
    else{
        return (
            <div className='addBtn'>
                <button onClick={handleClicked}>Add a new thing to do</button>
            </div>
        )
    }
}
