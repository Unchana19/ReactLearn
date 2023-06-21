import { useState } from 'react'
import data from './data/data'
import Content from './components/Content';

function App() {
  const [content, setContent] = useState(data);

  return (
    <main className='h-screen bg-gradient-to-t from-slate-900 to-gray-950'>
      <div className='h-screen flex flex-col w-11/12 items-center justify-center'>
          <h3 className='pb-20 font-bold text-3xl text-white'>Tool for Developing Website in 2023</h3>
          <section className='py-5 w-10/12'>
            {content.map(data => {
              return <Content key={data.id} {...data} />
            })}
          </section>
      </div>
    </main>
  )
}

export default App