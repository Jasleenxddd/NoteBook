import React from 'react'
import "./Note.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// let timer = 500,
//   timeout;
function Note(props) {
  // const [note, setNote] = useState('');

  //   const updateText = () => {
  //       // Clear the text input
  //       setNote('');
  //   };

  const formatDate = (value) => {
        if (!value) return "";
    
        const date=new Date(value);
        const monthNames=[
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
    
        let hrs=date.getHours();
        let amPm=hrs>=12 ?"PM": "AM";
        hrs= hrs? hrs : "12";
        hrs= hrs>12 ?(hrs=24- hrs): hrs;
    
        let min=date.getMinutes();
        min=min< 10? "0"+ min: min;
    
        let day=date.getDate();
        const month= monthNames[date.getMonth()];
    
        return `${hrs}:${min} ${amPm} ${day} ${month}`;
      };
      // const debounce=(func)=>{
      //       clearTimeout(timeout);
      //       timeout=setTimeout(func, timer);
      // };
      // const updateText=(text, id) => {
      //       debounce(()=>props.updateText(text, id));
      // };
      
  
  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea className='note_text' defaultValue={props.note.text}  id='place' placeholder="Enter your note here..."
      />
      <div className='note_footer'>
      <p>{formatDate(props.note.time)}</p>
      {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => props.updateText(props.note.id)} /> */}
      <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => props.deleteNote(props.note.id)} />
      </div>
      
    </div>
  );
}

export default Note
