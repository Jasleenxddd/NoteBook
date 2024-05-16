import React, { useState } from 'react';
import pluss from './pluss.png';
import './Sidebar.css';
function Sidebar(props) {
  const color=["#c33991","#8c7492","#3d76bf","#508985","#708f5f","#acab4c"];
  const [listOpen,setListOpen]=useState(false);
  return (
    <div className='sideBar'>
        <img src={pluss} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {color.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
