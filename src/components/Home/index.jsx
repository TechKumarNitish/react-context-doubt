import ThemeContext from "../../contexts/ThemeContext";

const Home = () => <ThemeContext.Consumer>
    {
        value => {
            const { theme, updateTheme } = value
            return <div className={`container ${theme === 'light' ? 'light-container' : 'dark-container'}`}>
                <p>Home</p>
                <button type="button" onClick={updateTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
            </div>
        }
    }
</ThemeContext.Consumer>

export default Home