import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import Sidebar from './Sidebar'
import Main from './Main'

export default function Note(prop) {

  const [notes, setnotes] = useState(() => JSON.parse(localStorage.getItem("my-first-project-noteapp")) || [])

  useEffect(() => {
     localStorage.setItem("my-first-project-noteapp", JSON.stringify(notes))
  }, [notes])
  
  const Addnewnote = () => {
    const date = new Date();
    const modified = date.toLocaleDateString("en-GB", {hour:"2-digit", minute:"2-digit"});
    const newnote = {
      id:nanoid(),
      tittle:"untittled",
      body:"",
      lastmodified:modified,
    }
    const newarr = [newnote, ...notes]
    setnotes(newarr)
  }

  const Delete = (id) => {
    const del = notes.filter(note => note.id !== id)
    window.confirm("Are you sure you want to delete this") && setnotes(del)
  }
   
  const [active, setactive] = useState(false)

  const getactivenote = () => {
    return (notes.find((note) => note.id === active))
  }

  const Edit = (updatednote) => {
    const updatednotearr = notes.map(note => {
      if(note.id === active) {
        return(updatednote)
      }
      else {
        return(note)
      }
    })

    setnotes(updatednotearr)
  }
  return (
    <section className='note-section'>
      <div className='container'>
        <div className='note-container'>
          <Sidebar 
            key={notes.id}
            notes={notes.filter(note => note.body.toLocaleLowerCase().includes(prop.search.toLocaleLowerCase()))}
            Addnewnote={Addnewnote}
            Delete={Delete}
            active={active}
            setactive={setactive}
          />
          <Main 
            getactivenote={getactivenote()}
            edit={Edit}
          />
        </div>
      </div>
    </section>
  )
}
