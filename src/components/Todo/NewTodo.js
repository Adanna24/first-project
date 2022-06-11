import React, { useState } from 'react'

function NewTodo(prop) {
  const [show, setshow] = useState(false)

  const display = {
    display: show? "":"none",
  }
  
  const undisplay = {
    display: show? "none":""
  }
  
  const onsubmit = event => {
    event.preventDefault()
    if(prop.input.text.trim().length > 0) {
      prop.addnewtask(prop.input.text)
      prop.setinput({text:""})
    }
    else {
      window.alert("Empty Input field")
    }
  }
 
  const handleinput = (event) => {
      const {name, value} = event.target
      prop.setinput(preinput => (
        {
          ...preinput,
          [name]: value,
        }
      ))
  }


  return (
    <div className='new-todo'>
      <div className='add-task'>
        <button className='btn-lg purple' onClick={() => setshow(preshow => !preshow)} style={undisplay}>Add A Task </button> 
      </div>
      <form onSubmit={onsubmit}>
        <div className='todo new' style={display}>
          <input type="text" placeholder='Enter your Task' name='text' value={prop.input.text} onChange={handleinput} className="input-2"/>
          <div className='todo-button'>
            <button type='submit' className='btn-medium green'>Save</button>
            <button type='button' className='btn-medium red' onClick={() => setshow(p => !p)}>Close</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewTodo;