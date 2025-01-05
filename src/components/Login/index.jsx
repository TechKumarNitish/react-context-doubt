import ThemeContext from "../../contexts/ThemeContext";
import './index.css'

const Login = () => <ThemeContext.Consumer>
    {
        value => {
            const { theme } = value
            return <div className={`container ${theme === 'light' ? 'light-container' : 'dark-container'}`}>
                <p>Login</p>   
            </div>
        }
    }
</ThemeContext.Consumer>

export default Login