import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from '@mui/material';


function CreateArea({onAdd}) {

  const [submission, setSubmission] = useState({
    title: "",
    content: ""
  });
  const [click, setClick] = useState(false);
  
  function expand(){
    setClick(true)
  }

  function handleChange(event){
    const {name, value} = event.target;
    
    setSubmission(prevSubmission => ({
      ...prevSubmission, [name]: value
    }));
  }

  function submitNote(event){
    event.preventDefault();
    onAdd(submission);

  setSubmission({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {click ? <input onChange = {handleChange} name="title" placeholder="Title" value={submission.title}/> : null}
        <textarea onClick = {expand} onChange = {handleChange} name="content" placeholder="Take a note..." rows= {click ? 3 : 1} value={submission.content}/>
        <Zoom in={click}>
        <Fab type="submit"><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
