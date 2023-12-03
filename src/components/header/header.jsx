import { useEffect, useState } from 'react';
import styles from './style.header.css'
import { Link } from "react-router-dom"


const Header = () => {
    
    const [isDark, setIsDark] = useState();




    let changeImg = () => {
      if (isDark) {
        document.all.themeButton.src = require("./themes/lightTheme.png")
      } else {
        document.all.themeButton.src = require("./themes/darkTheme.png")
      }
      console.log(isDark)
    }

  

    useEffect(() => {
        if (isDark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [isDark]); 

    let darkTheme

    return (
            <header id='header'>
                <nav id="navBar">
                   <Link to='/' className='link'>Home</Link>
                    <Link to='/Help' className='link'>HELP</Link>
                   <Link to='/Негр' className='link'>НЕГР</Link>
                </nav>
                  <div id='themeDivDiv'>
                      <div id='themeDiv'>
                      <img id='themeButton' src={require('./themes/lightTheme.png')} onClick={() => {
                      setIsDark(!isDark);
                      changeImg()
                      }} />
                  </div>
                </div>

            </header>
    )
}

export default Header   