import styles from './style.header.css'
import { Link } from "react-router-dom"


const Header = () => {






    return (
        <div>
            <header id='header'>
                <nav id="navBar">
                   <Link to='/' className='link'>Home</Link>
                    <Link to='/Help' className='link'>HELP</Link>
                   <Link to='/Негр' className='link'>НЕГР</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header