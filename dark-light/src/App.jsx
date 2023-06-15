import Content from "./components/Content"
import Title from "./components/Title"
import { createContext, useState } from "react"
import "../src/App.css";

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}} >
      <div className={`flex flex-col items-center justify-center h-screen ease-in duration-200 ${theme}`}>
          <Title />
          <Content />            
      </div>
    </ThemeContext.Provider>
  )
}

export default App
