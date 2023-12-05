import styles from "./style.error-page.css"


const Error = () => {

        
    return (
        <div id='errorPage'>
            <h1>ERROR 404</h1>
            <img src={require('./images/404.png')} />
            <h3>Not found</h3>
        </div>
    )
}

export default Error