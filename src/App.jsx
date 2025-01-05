import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import ThemeContext from './contexts/ThemeContext';

class App extends Component {
  state = { theme: "light" }

  updateTheme = () => {
    const { theme } = this.state;
    if (theme === 'light') {
      this.setState({ theme: 'dark' })
    } else {
      this.setState({ theme: 'light' })
    }
  }

  render() {
    const { theme } = this.state
    return (
      <ThemeContext.Provider value={{ theme, updateTheme: this.updateTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App
