import React from 'react'
import Note from './Note'
import './NoteContainer.css'

function NoteContainer(props){
    const reverArray = (arr) => {
    const array = [];

    for (let i=arr.length-1;i>=0;--i){
      array.push(arr[i]);
    }

    return array;
  };
    const notes = reverArray(props.notes);
    console.log(props.notes,notes);

  return (<div className='note_container '>
    <h2>NOTES</h2>
    <div className='note_container_notes custom-scroll'>
    {notes?.length > 0 ? (
          notes.map((item) => <Note
            key={item.id}
            note={item}
            deleteNote={props.deleteNote}
            updateText={props.updateText}
          />)
            
         ) : (
          <h3>No Notes present</h3>
        )}
        
    
    </div>
    
  </div>
  );
}

export default NoteContainer
