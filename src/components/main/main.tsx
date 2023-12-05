import { Route, Routes } from "react-router-dom"
import Home from '../home/home.tsx'
import Error from '../error-page/error-page.tsx'
import Database from "../database/database.tsx"


// Импорт стилей
const styles = require('./style.main.css')


const Main = () => {

    

    return (
        <div id='main'>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path="/Database" element={<Database />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </div>
    )
}

export default Main
