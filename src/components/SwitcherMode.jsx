import { useState } from "react"
import {darkIcon, lightIcon} from "../assets/icons";
import useDarkSide from "../hooks/useDarkSide";

export default function SwitcherMode() {
    const [colorTheme,setTheme] = useDarkSide();
    const [darkSide ,setDarkSide] = useState (
        colorTheme === "light" ? true : false
    );
    const toggleMode = () => {
        setTheme(colorTheme);
        setDarkSide(!darkSide);
        
      };

  return (
    <div className=" max-lg:block cursor-pointer" onClick={toggleMode}>
    <img src={darkSide ? darkIcon : lightIcon} alt="Mode Icon" width={25} height={25} />
    </div>
  )
}