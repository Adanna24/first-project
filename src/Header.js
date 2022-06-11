import React, { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { GiCancel } from 'react-icons/gi';

function Header(prop) {

  const [click, setclick] = useState(false)
  const handleclick = () => {
    setclick(preval => !preval)
  }
  
  return (
    <section className={`header-section trans ${prop.theme? "darkmode":""}`}>
        <header className="container header">
          <div className="logo-section">
            <label  className='label trans' onClick={prop.handleshow}>First Project</label>
          </div>
          <div onClick={handleclick} className="mobile-btn">
            {click? <GiCancel className=' trans close-icon'/>:<ImMenu className='trans menu-icon'/> }
          </div>
          <nav className={`trans ${click? "nav-menu act" : "nav-menu"}`}> 
           <div className="toggle">
              <small className='light'>Light Mode</small>
              <div className="toggle-btn" onClick={prop.changetheme}>
                <div className="toggle-circle"></div>
              </div>
              <small className='dark'>Dark Mode</small>
            </div>
          </nav>
          <div className="input">
            <input
              type='search'
              placeholder="search ---"
              name="search"
              className="search-field"
              value={prop.search}
              onChange={(e) => prop.setsearch(e.target.value)}
            />
          </div>
        </header>
      </section>
  )
}

export default Header