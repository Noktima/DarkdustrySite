import { useEffect, useState } from 'react';
import styles from './style.header.css'
import { Link } from "react-router-dom"
import Toggle from "../react-toggle-master/component"


const Header = () => {
    
    const [isDark, setIsDark] = useState(true);

    const DarkModeToggle = () => {
        const [isDark, setIsDark] = useState(true);
    }

    useEffect(() => {
        if (isDark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [isDark]); 

      

    return (
        <div>
            <header id='header'>
                <nav id="navBar">
                   <Link to='/' className='link'>Home</Link>
                    <Link to='/Help' className='link'>HELP</Link>
                   <Link to='/Негр' className='link'>НЕГР</Link>
                </nav>
                <div id='themeDiv'>
                    <Toggle
                        checked={isDark}
                        onChange={({ target }) => setIsDark(target.checked)}
                        icons={{ checked: "🌙" }}
                        aria-label="Dark mode toggle"
                    />
                </div>
            </header>
        </div>
    )
}

export default Header