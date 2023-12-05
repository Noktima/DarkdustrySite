import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"


// Импорт стилей
const styles = require('./style.header.css')

const Header = () => {

    // Смена темы
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [isDark]); 

    
    
    let themeButton = document.getElementById('themeButton') as HTMLImageElement;
 

    // Смена картинки
    let changeImg = () => {
      if (isDark) {
        themeButton.src = require("./images/themes/lightTheme.png")
      } else {
        themeButton.src = require("./images/themes/darkTheme.png")
      }
    }


    return (
            <header id='header'>
                <nav id="navBar">
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/Help' className='link'>Help</Link>
                    <Link to='/Database' className='link'>Database</Link>
                </nav>
                  <div id='rightDiv'>
                    <img id='userImg' src={require("./images/logged_out.png")}/>
                    <a href='Ссылка для логина' id='loginButton'>Log in</a>
                      <div id='themeDiv'>
                        {/* Кнопка смены темы */}
                      <img id='themeButton' src={require('./images/themes/lightTheme.png')} onClick={() => {
                      setIsDark(!isDark);
                      changeImg()
                      }} />
                  </div>
                </div>

            </header>
    )
}

export default Header   