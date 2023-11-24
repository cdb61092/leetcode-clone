import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Logo } from "~/components/Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from 'next-themes';

export function Header() {

    const { theme } = useTheme();
    const isDark = theme === 'dark';


    return (
        <Navbar>
            <Link href='/' color={"foreground"}>
                <NavbarBrand>
                    <Logo />
                    <p className={`font-bold text-lg ml-2 pr-4 text-inherit ${isDark ? 'text-white' : 'text-black'}`}>CRACKEDCODE</p>
                </NavbarBrand>
            </Link>
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="/problems">
                        Problems
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" color="foreground" aria-current="page">
                        Learning
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitcher />
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className={`font-medium text-lg px-6 py-2 rounded-lg border transition-all duration-300 ease-in-out ${isDark ? 'border-gray-300 text-white hover:bg-white hover:text-gray-800' : 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'}`}>Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#"
                        variant="flat"
                        className={`font-medium text-lg px-6 py-3 rounded-lg border transition-all duration-300 ease-in-out ${isDark ? 'border-gray-800 bg-white text-gray-800 hover:bg-black hover:text-white hover:border-gray-600' : 'border-blue-600 bg-blue-100 text-blue-800 hover:text-white hover:bg-blue-500 hover:border-blue-500'}`}
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
