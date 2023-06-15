import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";

export default function Title(){
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () =>{
        setTheme(
            theme === 'light' ? 'dark' : 'light'
        )
    }
    return(
        <header className={`mb-20 mt-10 w-10/12 flex text-3xl font-bold justify-between ${theme}`}>
            <span>Mode {theme}</span>
            <Switch 
                onChange={toggleTheme}
                checked={theme === "dark"}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#e9967a'}
            />
        </header>
    )
}