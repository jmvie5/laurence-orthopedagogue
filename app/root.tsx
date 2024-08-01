import { LoaderFunctionArgs, json, LinksFunction } from "@remix-run/node";
import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData,
  useRouteError,
} from "@remix-run/react";
import { NextUIProvider } from "@nextui-org/react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

import stylesheet from "./tailwind.css?url";
import React from "react";
export const links: LinksFunction = () => [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          {children}
          <ScrollRestoration />
          <Scripts />
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Erreur</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col justify-center gap-2 h-dvh bg-background text-center">
          <Button
            size="lg"
            isIconOnly
            variant="light"
            as={Link}
            href="/"
            className="absolute top-0 left-0 m-4"
          >
            <HomeIcon className="min-w-8" />
          </Button>
          <h1 className="font-bold text-2xl">Oups!</h1>
          <p>Une erreur est survenue, nous travaillons pour la résoudre.</p>
          <p>Ciquez sur le bouton en haut à gauche pour revenir à l'accueil.</p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
