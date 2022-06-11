import React, { useEffect, useState } from 'react'
import './meme.css'
import { nanoid } from 'nanoid'
import memedata from './memedata'

function Meme(prop) {
  
  const [memeinput, setmemeinput] = useState(
    {
      topText:"",
      bottomText:"",
      url:"https://i.pinimg.com/originals/2d/7d/0f/2d7d0fee592a9ea7341ccae86627e379.jpg",
    }
  )
  
  const getmemeimg = () => {
    const memearr = memedata
    const randomNO = Math.floor(Math.random() * memearr.length)
    const randomimg = memearr[randomNO].url 
    setmemeinput(prememe => (
      {
        ...prememe,
        url:randomimg
      }
    ))
  }
    const handleinput = event => {
        event.preventDefault()
        const {name, value} = event.target 
        setmemeinput(preval => (
          {
            ...preval,
            [name]: value
          }
        ))
    }

    const [memes, setmemes] =useState(() => JSON.parse(localStorage.getItem("meme-maker"))||[])
    
    useEffect(() => {
        localStorage.setItem("meme-maker", JSON.stringify(memes))
    }, [memes])

    const savememe = () => {
      if(memeinput.topText.trim().length || memeinput.bottomText.trim().length > 0) {
        const newmeme = {
          id:nanoid(),
          toptext:memeinput.topText,
          bottomtext:memeinput.bottomText,
          img:memeinput.url,
        }
        setmemes([newmeme, ...memes])
        setmemeinput( {topText:"", bottomText:""})
      }
      else {
        alert("Empty Input Field")
      }
    }

    const deletememe = (id) => {
      if(window.confirm("Are You Sure You Want To Delete This Meme")) {
        const del = [...memes].filter(meme => meme.id !== id)
        setmemes(del)
      }
    }


   const searchmeme = memes.filter(meme => {
      if(prop.search === "") {
        return meme;
      }
      else if ((meme.toptext.toLowerCase().includes(prop.search.toLowerCase()))){
          return meme;
      }
  
     })
  

  return (
    <section className='meme-section'>
      <div className='container'>
        <div className='meme-container'>

          <div className='top-section'>
            <h1>Create MeMe</h1>
            <div className='form-section'>
              <div className='meme-form'>
                <input
                  type="text"
                  name="topText"
                  className='top-text'
                  placeholder='top-text'
                  value={memeinput.topText}
                  onChange={handleinput}
                />
                <input
                  type="text"
                  name="bottomText"
                  className='bottom-text'
                  placeholder='bottom-text'
                  value={memeinput.bottomText}
                  onChange={handleinput}
                />
                <button 
                    className='btn-lg purple last-colum' 
                    type='button'
                    onClick={getmemeimg}
                >Get Meme Image
                </button> 
              </div>
            </div>
          </div>

          <div className='middle-section'>
            <div className='middle-meme'>
              {memeinput.topText && <h2 className='up'>{memeinput.topText}</h2>} 
              {memeinput.url && <img src={memeinput.url} alt='meme-1' className='meme-img' />}
              {memeinput.topText && <h2 className='down'>{memeinput.bottomText}</h2>}
            </div>
           <div className='meme-buttons'>
              <button className='btn-lg purple' onClick={savememe}>Save Meme</button>
            </div>
          </div>

          <div className='bottom-section'>
            <h2 className='heading'>MEMES GALLERY</h2>
            <div className='bottom-section-meme'>
              {searchmeme.map(meme => (
                <div className='meme-whole'>
                  <div className='meme'>
                    {meme.toptext && <h2 className='up'>{meme.toptext}</h2>}
                    {meme.img && <img src={meme.img} alt="meme-imgs"/>}
                    {meme.bottomtext && <h2 className='down'>{meme.bottomtext}</h2>}
                  </div>
                  <div className='btns'>
                    <button className='btn-sm red w-100' onClick={()=>deletememe(meme.id)}>Delete</button>
                    <button className='btn-sm green w-100'>Download</button>
                  </div>
                </div>
              ) ) }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meme