import { Route, Routes } from "react-router-dom"
import styles from './style.main.css'
import Home from '../home/home.tsx'
import Error from '../error-page/error-page.tsx'
import Database from "../database/database.tsx"


const Main = () => {

    

    return (
        <div id='main'>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path="/Database" element={<Database />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </div>
    )
}

export default Main
