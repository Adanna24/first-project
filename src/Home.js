import React from 'react'

function Home(prop) {
  const homedisplace = {
    display: prop.show? "none":"block"
  }
  return (
    <div className='hero-section' style={homedisplace}>
      <video src='pictures/video-1.mp4' autoPlay loop muted />
      <div className='home-card'>
        <div className='home-text'>
          <img  src='pictures/mypicture.jpg' className='flower self' alt='my-self'/>
          <h1>Hey, Welcome</h1>
          <p>This is my first React Project, Hope you Are Impressed</p>
        </div>
         <div className='home-images'>
            <img src='pictures/f1.jpg' className='flower' alt='flowers'/>
            <img src='pictures/f2.jpg' className='flower' alt='flowers'/>
            <img src='pictures/f1.jpg' className='flower' alt='flowers'/>
            <img src='pictures/f3.jpg' className='flower' alt='flowers'/>
        </div>
        <div>
          <button className='btn-xlg purple' onClick={prop.handleshow}>Check It Out</button>
        </div>
      </div>
    </div>
  )
}

export default Home;