import React from 'react'

 function Header(props) {

  return (
       <header>
        <h2>Shopster</h2>
        <button onClick={() => props.onDarkModeClick()}>
          {props.darkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
  )
}

export default Header;