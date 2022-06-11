import React from 'react'
import './todo.css'

function Todo(prop) {
   const col = {
     backgroundColor: "black",
     color: "grey"
   }

   const savedit = () => {
     if(prop.editext.trim().length > 0) {
       prop.savechange(prop.id)
     }
     else{
       alert("Empty Input Field")
     }
   }


  return ( 
      <div>
        <div className='todo' style={prop.complete? col:prop.style}>
            <div className='todo-content'>

              {(prop.edit === prop.id)? 
              (<input
                name='text'
                type="text"
                className='input-3'
                value={prop.editext}
                onChange={(e) => prop.seteditext(e.target.value)}
              />): (<strong><li>{prop.text}</li></strong>)}
            </div>
            <div className='todo-button'>

              {
                prop.edit === prop.id? (<button 
                  className="btn-sm green" 
                  onClick={savedit}   
                > 
                    Save 
                </button>):( <button 
                className="btn-sm orange"
                onClick={() => prop.setedit(prop.id)}
              >
                Edit
              </button>)
              }
              
             
              <button 
                className={`btn-sm purple ${prop.complete? " done":""}`} 
                onClick={() => prop.handlecomplete(prop.id)}>
                  {`${prop.complete? "UnDone":"Done"}`}
              </button>
              <button 
                  className='btn-sm red' 
                  onClick={() => prop.remove(prop.id)}>
                    Delete
              </button>
            </div>
          </div>
      </div>
  )
}

export default Todo;