import light from '../assets/light.svg';
import dark from '../assets/dark.svg';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Content(){
    const {theme} = useContext(ThemeContext);

    return(
        <section className={`mt-20 my-60 w-9/12 flex justify-between ${theme}`}>
            <div className=''>
                <h1 className='text-5xl sm:text-md font-extrabold'>DarkMode LightMode</h1>
                <p className='mt-10 text-2xl font-semibold'>Workshop</p>
            </div>
            <img src={theme === 'light' ? light : dark} alt='logo' width='50%' />
        </section>
    )
}