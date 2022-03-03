import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded,setExpanded]=useState(false);
    const [inputText,setInputText]=useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setInputText(prevValue=>{
           return {
               ...prevValue,
               [name]:value
            }
        });
    }   
    function handleClick(e){
        props.addItem(inputText);
        e.preventDefault();
        setInputText({
            title:"",
            content:""
        });
    }
    function expand(){
      setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
       {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />}
        <textarea onChange={handleChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded?3:1} value={inputText.content} />
            <Zoom in={isExpanded} >
              <Fab onClick={handleClick} >
                  <AddIcon />
              </Fab>
            </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
