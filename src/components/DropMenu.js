//From https://headlessui.com/react/menu

import * as React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { Link } from 'gatsby';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function DropMenu() {
    const siteMetadata = useSiteMetadata();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    Menu
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="-mr-1 ml-2 mt-1 h-5 w-5"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {siteMetadata.menuLinks.map((link) => (
                            <Menu.Item key={link.name}>
                                {({ active }) => (
                                    <Link
                                        to={link.link}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
