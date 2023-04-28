import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import DoBuFooter from "./components/DoBuFooter";
import Navbar from "./components/Navbar";
import { getUser } from "./session.server";
import tailwindStylesheetUrl from "./styles/tailwind.css";

import { ParallaxProvider } from "react-scroll-parallax";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DoBu Martial Arts",
  viewport: "width=device-width,initial-scale=1",
  description:
    "DoBu Martial Arts is the leading mixed-discipline martial arts facility in Watopia.  We also provide an extensive modern gym and leisure facilities.",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <ParallaxProvider>
          <Navbar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <DoBuFooter />
        </ParallaxProvider>
      </body>
    </html>
  );
}
