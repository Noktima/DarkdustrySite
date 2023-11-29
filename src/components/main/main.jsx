import { Route, Routes } from "react-router-dom"
import styles from './style.main.css'
import Home from '../home/home.jsx'
import Error from '../error-page/error-page.jsx'


const Main = () => {


    return (
        <div id='main'>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </div>
    )
}

export default Main
