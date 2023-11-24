// import { cssBundleHref } from "@remix-run/css-bundle";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,

} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { NextUIProvider } from "@nextui-org/react";
import stylesheet from "~/tailwind.css";
import { Header } from "~/components/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];


export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <NextUIProvider>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        <Header />
                        <Outlet />
                        <ScrollRestoration />
                        <Scripts />
                        <LiveReload />
                    </NextThemesProvider>
                </NextUIProvider>
            </body>
        </html>
    );
}
