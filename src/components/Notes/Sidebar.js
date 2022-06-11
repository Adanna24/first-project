import React from 'react'
import { MdDelete } from 'react-icons/md'

function Sidebar(props) {
  return (
    <div className='sidebar'>
      <div className='sidebar-head'>
        <h2>Note App</h2>
        <button className='btn-medium green' onClick={props.Addnewnote}> + Note </button>
      </div>
      <div className='note-section'>
        {props.notes.map((note) => (
          <div className={`note trans ${note.id === props.active? "active":""}`} onClick={() => props.setactive(note.id)}>
            <div className='note-body'>
              <h4 className='title'>{note.tittle && note.tittle.substr(0, 15)}</h4>
              <p className='text'>{note.body && note.body.substr(0, 20) + "..."}</p>
              <div className='note-footer'>
                <small className='sm'>{note.lastmodified}</small>
              </div>
            </div>
            <div>
              <button className='del trans' onClick={() => props.Delete(note.id)}><MdDelete/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
