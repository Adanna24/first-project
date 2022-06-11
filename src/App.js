import React,{ useEffect, useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Note from "./components/Notes/Note";
import Todocontainer from "./components/Todo/Todocontainer";
import Header from "./Header";
import Meme from "./components/Meme-maker/meme";
import Home from "./Home";

function App () {

  const [theme, settheme] = useState( () => JSON.parse(localStorage.getItem("theme-settings"))|| false)

  useEffect(() => {
    localStorage.setItem("theme-settings", JSON.stringify(theme))
  }, [theme])

  const changetheme = () => {
    settheme(pretheme => !pretheme)
  }

  const [showhome, setshowhome] = useState(false)

  const homedisplay = {
    display: showhome? "block":"none"
  }

  const handleShow = () => {
    setshowhome(showhome => !showhome)
  }

  const [searchtext, setsearchtext] = useState("")
  return (
     <div>
          <Home 
            key={Date.now}
            show={showhome}
            setshowhome={setshowhome}
            handleshow={handleShow}
          />
          <main className={`trans ${theme? "darkmode":"" }`} style={homedisplay}>
            <Header 
              key={theme}
              theme={theme}
              changetheme={changetheme}
              handleshow={handleShow}
              search={searchtext}
              setsearch={setsearchtext}
            />
            <Meme search={searchtext} />
            <Note 
                theme={theme}
                changetheme={changetheme}
                search={searchtext}
            />
              <Todocontainer search={searchtext} />
          </main>
     </div>     
  )
}

export default App;