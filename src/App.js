import React,{useState, useEffect} from "react";
import './App.css';
import NoteContainer from './components/NoteContainer';
import Sidebar from './components/Sidebar';

function App() {
  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem("notebook"))||[]);
  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };
  
  const deleteNote=(id)=>{
    const tempNotes=[...notes];

    const index=tempNotes.findIndex((item)=>item.id===id);
    if(index<0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  // const [notes,setNotes]=useState('');

      // const updateText=()=>{
      //   console.log("Uppercase was clicked" + notes);
      //   let newText='';
      //   setNotes(newText);
        // props.showAlert("Text is cleared!","success");

    

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };
//   const updateText = () => {
//     // Clear the text input
//     setNotes('');
// };

const updateChange = (event) => {
    // Update the note state when input changes
    setNotes(event.target.value);
};
  useEffect(()=> {
    localStorage.setItem("notebook", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText} updateChange={updateChange}/>
    </div>
  );
}

export default App;


