import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import useWindowSize from '../../modules/windowSize.js';
import DropMenu from './DropMenu.js';
import { useSiteMetadata } from '../hooks/use-site-metadata';

/* Lien facebook
<a href='https://www.facebook.com/' className='flex space-x-1.5'>
    <StaticImage src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'
        alt='Facebook Logo' width="30" height="30" className='aspect-square'/>
    <p className='underline font-mulish'>@laurencebf</p>
</a>
*/

const Layout = ({ pageTitle, children }) => {
    const siteMetadata = useSiteMetadata();

    let isSmallWindow;
    let windowWidth = useWindowSize().width;

    if (windowWidth < 700) {
        isSmallWindow = true;
    } else if (windowWidth > 700) {
        isSmallWindow = false;
    }

    return (
        <div>
            <div className="flex bg-lbf-blanc text-white min-h-screen justify-center">
                <div className=" flex flex-col justify-between max-w-screen-xl w-full">
                    <header className="flex justify-between p-4 sm:p-8  z-50">
                        <title>
                            {pageTitle} | {siteMetadata.title}
                        </title>
                        <Link to="/" className="xxs:text-4xl text-2xl font-satisfy bg-lbf-orange p-4 mr-2 rounded-lg">
                            <p>Laurence bf,</p>
                            <p>orthopédagogue</p>
                        </Link>
                        <div>
                            {isSmallWindow ? (
                                <div> {DropMenu()} </div>
                            ) : (
                                <nav className="bg-lbf-orange p-4 rounded-lg">
                                    <ul className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-2 lg:divide-x-2 justify-center">
                                        {siteMetadata.menuLinks.map((link) => (
                                            <li key={link.name} className="place-self-center px-4">
                                                <Link className="hover:text-black text-xl font-mulish" to={link.link}>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </div>
                    </header>
                    <div className="bg-lbf-blanc min-h-screen">
                        <main className="font-sans text-black m-4 xs:m-8">
                            <h1 className="text-3xl font-bold pb-8 font-mulish">{pageTitle}</h1>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-gradient-to-t from-lbf-orange to-lbf-blanc" />
            <footer className="flex flex-col sm:flex-row text-white bg-lbf-orange p-4 gap-4 text-sm md:text-base justify-between">
                <div className="">
                    <div className="mt-2 flex justify-center">
                        <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0">
                            <a
                                href="https://www.instagram.com/laurencebf.orthopedagogue/"
                                className="flex space-x-1.5 group"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <StaticImage
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png"
                                    alt="Logo d'Instagram"
                                    width={30}
                                    height={30}
                                    className="aspect-square"
                                />
                                <p className="group-hover:underline font-mulish">@laurencebf_orthopedagogue</p>
                            </a>
                            <a
                                href="https://www.pinterest.ca/laurencebforthopedagogue/"
                                className="flex space-x-1.5 group"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <StaticImage
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                                    alt="Pinterest-logo"
                                    width={30}
                                    height={30}
                                    className="aspect-square"
                                />
                                <p className="font-mulish group-hover:underline">@laurencebforthopedagogue</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:mr-4 gap-2 items-center">
                    <p>
                        Contact :{' '}
                        <a className="hover:underline" href="mailto:info@laurencebf.ca">
                            info@laurencebf.ca
                        </a>
                    </p>
                    <p className="">
                        Site web développé par{' '}
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
            </footer>
        </div>
    );
};

export default Layout;
