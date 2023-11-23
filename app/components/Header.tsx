import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Logo} from "~/components/Logo";

export function Header() {
    return (
        <Navbar>
            <Link href='/' color={"foreground"}>
                <NavbarBrand>
                    <Logo/>
                    <p className="font-bold text-inherit">CRACKEDCODE</p>
                </NavbarBrand>
            </Link>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
