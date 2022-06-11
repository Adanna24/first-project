import React, { useEffect, useState } from 'react'
import NewTodo from './NewTodo'
import Todo from './Todo'
import { nanoid }from 'nanoid'
import './todo.css'

function Todocontainer(prop) {
  const [todos, settodos] = useState(() => JSON.parse(localStorage.getItem("tasks")) ||[])
  
 useEffect(() => {
   localStorage.setItem("tasks", JSON.stringify(todos))
 }, [todos])

  const colors = [
    {
      number: 1,
      backgroundColor: "#022D36"
    },
    {
      number: 2,
      backgroundColor: "#152238"
    },
    {
      number: 3,
      backgroundColor: "#023020"
    },
    {
      number: 4,
      backgroundColor: "#301934"
    },
    {
      number: 5,
      backgroundColor: "#343434"
    },
    {
      number: 6,
      backgroundColor: "#192841"
    },
    {
      number: 7,
      backgroundColor: "#292C1B"
    }
];
  const randomcolor= Math.floor(Math.random() * colors.length)
  const colorarr = colors[randomcolor].backgroundColor;
  const backgroundstyle = {
    backgroundColor: colorarr
  } 

  const [input, setinput] = useState({
    text:""
  })


  const Addnewtask = () => {

      const newtask = {
        id:nanoid(),
        text:input.text,
        complete:false,
      }
     
      const newtaskarr = [newtask, ...todos]
      return (settodos(newtaskarr))
    
  }

  const remove = (id) => {
    if (window.confirm("you are about to delete this task")) {
      const removetask = [...todos].filter(task => task.id !== id)
      settodos(removetask)
      }
  }

  const handlecomplete = (id) => {
    settodos(todos.map(item => {
      if(item.id === id) {
        return {...item, complete: !item.complete}
      }
      else {
        return item
      }
    } ))
  }

  const arrange = todos.sort((a, b) => a.complete - b.complete)

  const [edit, setedit] = useState(null)

  const [editext, seteditext] = useState("")

  function savechange (id) {
    const change = [...todos].map(todo => {
      if(todo.id === id) {
        todo.text=editext;
      }
        return todo;
    })

    settodos(change);
    setedit(null);
    seteditext("");
  }
  return (
    <section className='todo-section'>
      <div className='container'>
        <div className='todos'>
          <div className='create-todo'>
            <h1>PLAN YOUR EVENT FOR TODAY</h1>
            <NewTodo 
              input={input}
              setinput={setinput}
              addnewtask={Addnewtask}
            />
          </div>
          <div className='todo-holder' key={todos.id}>
            {arrange.map((todo) => 
              <Todo 
                key={todo.id}
                id={todo.id}
                complete={todo.complete}
                text={todo.text}
                style={backgroundstyle}
                input={input}
                setinput={setinput}
                remove = {remove}
                handlecomplete={handlecomplete}
                edit={edit}
                setedit={setedit}
                editext={editext}
                seteditext={seteditext}
                savechange={savechange}
              /> 
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Todocontainer