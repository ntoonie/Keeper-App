import React from "react";
import { useState } from "react";

function CreateArea({onAdd}) {

  const [submission, setSubmission] = useState({
    title: "",
    content: ""
  });

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
      <form onSubmit={submitNote}>
        <input onChange = {handleChange} name="title" placeholder="Title" value={submission.title}/>
        <textarea onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" value={submission.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
