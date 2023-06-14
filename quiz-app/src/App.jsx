import { createContext, useState } from 'react'
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Score from './components/Score';

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <DataContext.Provider value={{appState, setAppState, score, setScore}}>
      <div className='flex flex-col bg-gradient-to-t from-gray-950 to-indigo-950 h-screen text-white items-center justify-center'>
        {appState === "quiz" &&                
          <h1 className='w-9/12 text-end text-3xl font-extrabold tracking-widest opacity-80 drop-shadow-[0_0_1rem_rgba(255,255,255,.3)]'>Quizing</h1> ||
          <h1 className='w-full text-center pt-10 text-7xl font-extrabold tracking-widest mb-10 drop-shadow-[0_0_2rem_rgba(255,255,255,.4)]'>Quizing</h1>}
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  )
}

export default App