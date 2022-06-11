import React from 'react'
import  ReactMarkdown  from 'react-markdown'


function Main(prop) {
  const Change = (key, value) => {
    prop.edit({
      ...prop.getactivenote,
      [key]:value,
      modified:Date.now()
    })
  
  }

  if (!prop.getactivenote) {
    return(
      <div className='none-selected'>No Note Selected</div>
    )
  }
  return ( 
    <div className='main-bar trans'>
      <h1>Note Mark Up</h1>
      <div className='field'>
        <input
          type="text"
          className='input-1'
          name='tittle'
          autoFocus 
          value={prop.getactivenote.tittle}
          onChange={(event) => Change("tittle", event.target.value)}
        />
        <textarea
          placeholder='start typing--'
          className='textarea-1'
          name='body'
          value={prop.getactivenote.body}
          onChange={(event) => Change("body", event.target.value)}
        />
      </div>
      <div className='preview'>
        <h2>Note Preview</h2>
        <h4 className='preview-tittle'>Note Tittle: {prop.getactivenote.tittle}</h4>
        <ReactMarkdown className='markdown line-height'>{prop.getactivenote.body}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Main;