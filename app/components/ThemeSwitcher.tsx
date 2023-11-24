import { useTheme } from "next-themes";
import {Button} from "@nextui-org/react";
import { BiSolidMoon } from "react-icons/bi/index.js";
import { WiDaySunny } from "react-icons/wi/index.js";


export const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme()

    function toggleTheme() {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return (
        <div>
            <Button isIconOnly size={'lg'}
                className="m-2 p-2 bg-transparent"
                onClick={toggleTheme}>
                    {theme === 'dark' ?  <WiDaySunny size={100} /> : <BiSolidMoon size={100} />}
            </Button>
        </div>
    )
};