import React from 'react'
import Note from '../Note/Note';
import "./NoteContainer.css";

const NoteContainer = (props) => {

  const reverseArray = (arr) => {
    const Array=[];

    for(let i=arr.length - 1; i > 0; --i){
      Array.push(arr[i])
    }

    return Array;
  };

  const notes = reverseArray(props.notes);

  return (
    <div className='note-container'>
      <h2>Notes</h2>
      <div className='note-container_notes custom-scroll'>
        {notes.length>0 ? notes.map((item) => {
          return <Note key={item.id} note={item} deleteNote={props.deleteNote} updateText={props.updateText}/>
        }) : <h2 style={{color: "#484848", width: "500px"}}>No Items in the todo list</h2>}
      </div>
    </div>
  )
}

export default NoteContainer
