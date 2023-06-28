import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import useWindowSize from '../../modules/windowSize.js'
import DropMenu from './DropMenu.js'
import { useSiteMetadata } from "../hooks/use-site-metadata"


/* Lien facebook
<a href='https://www.facebook.com/' className='flex space-x-1.5'>
    <StaticImage src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'
        alt='Facebook Logo' width="30" height="30" className='aspect-square'/>
    <p className='underline font-mulish'>@laurencebf</p>
</a>
*/

const Layout = ({ pageTitle, children }) => {

    const siteMetadata = useSiteMetadata()

    let isSmallWindow
    let windowWidth = useWindowSize().width

    if (windowWidth < 700) {
        isSmallWindow = true;
    } else if (windowWidth > 700) {
        isSmallWindow = false;
    };

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <header className='flex justify-between items-center p-8 bg-lbf-blanc text-white z-50'>
                <title>{pageTitle} | {siteMetadata.title}</title>
                <Link to="/" className="min-[420px]:text-4xl min-[340px]:text-2xl text:xl font-satisfy bg-lbf-orange p-4 rounded-lg">
                    <p>Laurence bf,</p>
                    <p>orthopédagogue</p>
                </Link>
                <div>
                    {isSmallWindow
                    ? <div> <Link to="mon-compte" className="hover:text-black text-xl font-mulish bg-lbf-orange p-4 rounded-lg">Mon compte</Link> {DropMenu()} </div>
                    : <nav className='flex flex-col gap-4 md:flex-row'>
                        <div className='bg-lbf-orange p-4 rounded-lg'>
                            <ul className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-2 lg:divide-x-2 justify-center">
                            {siteMetadata.menuLinks.map(link => (
                                <li
                                key={link.name}
                                className="place-self-center px-4">
                                    <Link className="hover:text-black text-xl font-mulish" to={link.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li><Link to="mon-compte" className="hover:text-black text-xl font-mulish px-4 place-self-center">Mon compte</Link></li>
                            </ul>
                        </div>
                        
                        
                    </nav>
                    }
                </div>
            </header>

            <div className='bg-lbf-blanc min-h-screen'>
                <main className="font-sans text-black p-8">
                    <h1 className='text-3xl font-bold pb-8 font-mulish'>{pageTitle}</h1>
                    {children}
                </main>
            </div>
            <div className='p-4 bg-gradient-to-t from-lbf-orange to-lbf-blanc'/>
            <footer className='flex flex-col sm:flex-row text-white bg-lbf-orange p-4 gap-4 text-sm md:text-base justify-between' >
                <div className=''>
                    <div className='mt-2 flex justify-center'>
                        <div className='flex flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0'>
                            <a href='https://www.instagram.com/laurencebf.orthopedagogue/' className='flex space-x-1.5'>
                                <StaticImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png'
                                    alt="Logo d'Instagram" width={30} height={30} className='aspect-square'/>
                                <p className='underline font-mulish'>@laurencebf_orthopedagogue</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col sm:mr-4 gap-2 items-center'>
                    <p>Contact : </p>
                    <a className="underline" href='mailto:info@laurencebf.ca'>info@laurencebf.ca</a>
                </div>
            </footer>
        </div>
    )
}

export default Layout