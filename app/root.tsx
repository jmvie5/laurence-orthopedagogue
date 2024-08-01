import { useReducer } from "react";
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
  Navigate,
} from "@remix-run/react";
import { HomeIcon } from "@heroicons/react/24/outline";
import {
  NextUIProvider,
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

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
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  const menuLinks = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "À propos",
      link: "/a-propos",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Blogue",
      link: "/blogue",
    },
    {
      name: "Matériel",
      link: "/materiel",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center z-50 bg-lbf-orange text-white ">
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          position="static"
          className="bg-lbf-orange"
          height={"6rem"}
        >
          <NavbarContent className="">
            <NavbarBrand className="">
              <Link
                to="/"
                className="xxs:text-3xl lg:text-4xl text-2xl font-satisfy bg-lbf-orange"
              >
                <p>Laurence bf,</p>
                <p>orthopédagogue</p>
              </Link>
            </NavbarBrand>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden"
            />
          </NavbarContent>

          <NavbarContent
            className="hidden md:flex divide-x-1 gap-0"
            justify="center"
          >
            {menuLinks.map((item, index) => (
              <NavbarItem key={`${item}-${index}`}>
                <Link
                  className="hover:underline underline-offset-4 text-lg lg:text-xl px-2 font-mulish"
                  to={item.link}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end" className="hidden md:flex">
            <NavbarItem>
              <Button className="bg-lbf-bleu text-white">Se connecter</Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <div className="p-1 bg-gradient-to-b from-lbf-orange to-lbf-blanc absolute w-full top-0 left-0" />
            {menuLinks.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full text-black hover:text-opacity-50 text-lg font-mulish"
                  to={item.link}
                  onClick={() => setIsMenuOpen()}
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}

            <Link
              to="#"
              className="w-full text-black hover:text-opacity-50 text-lg font-mulish"
            >
              Se connecter
            </Link>
          </NavbarMenu>
        </Navbar>
      </div>
      <div className="p-1 bg-gradient-to-b from-lbf-orange to-lbf-blanc" />
      <div className="flex bg-lbf-blanc text-white min-h-screen justify-center w-full">
        <div className=" flex flex-col justify-between max-w-screen-xl w-full">
          <div className="bg-lbf-blanc min-h-screen">
            <main className="font-sans text-black m-4 xs:m-8">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <div className="p-1 bg-gradient-to-t from-lbf-orange to-lbf-blanc" />
      <div className="flex flex-col sm:flex-row text-white bg-lbf-orange p-4 gap-4 text-sm md:text-base justify-between">
        <div className="">
          <div className="mt-2 flex justify-center">
            <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0">
              <a
                href="https://www.instagram.com/laurencebf.orthopedagogue/"
                className="flex space-x-1.5 group"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
                  alt="Logo d'Instagram"
                  width={30}
                  height={30}
                  className="aspect-square"
                />
                <p className="group-hover:underline font-mulish">
                  @laurencebf_orthopedagogue
                </p>
              </a>
              <a
                href="https://www.pinterest.ca/laurencebforthopedagogue/"
                className="flex space-x-1.5 group"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                  alt="Pinterest-logo"
                  width={30}
                  height={30}
                  className="aspect-square"
                />
                <p className="font-mulish group-hover:underline">
                  @laurencebforthopedagogue
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:mr-4 gap-2 items-center">
          <p>
            Contact :{" "}
            <a className="hover:underline" href="mailto:info@laurencebf.ca">
              info@laurencebf.ca
            </a>
          </p>
          <p className="">
            Site web développé par{" "}
            <a
              className="hover:underline"
              href="https://jeanmichelviel.ca"
              target="_blank"
              rel="noreferrer"
            >
              jeanmichelviel.ca
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  Navigate({ to: "/" });
  return (
    <html>
      <head>
        <title>Erreur</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col justify-center gap-2 h-dvh bg-background text-center mx-4">
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
          <p>La page demandée n'a pas été trouvée.</p>
          <p>
            Vous allez être redirigé automatiquement vers la page d'accueil.
            Sinon, cliquez sur le bouton en haut à gauche pour revenir à
            l'accueil.
          </p>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
