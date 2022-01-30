import React, { useState } from 'react'
import { Link } from '@inertiajs/inertia-react'
import { HomeIcon, ListIcon, TemplateIcon, ArrowDown } from '@/Components/Icons'

export default function SidebarContent(){
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)

    return (
        <>
            <div className="py-4 text-gray-500 dark:text-gray-400">
                <a
                    className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    href="#"
                >
                    Windmill
                </a>
                <ul className="mt-6">
                    <li className="relative px-6 py-3">
                        <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                            href={route('dashboard')}
                        >
                            <HomeIcon/>
                            <span className="ml-4">Dashboard</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li className="relative px-6 py-3">
                        <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                            href={route('tables.index')}
                        >
                            <ListIcon/>
                            <span className="ml-4">Tables</span>
                        </Link>
                    </li>
                    <li className="relative px-6 py-3">
                        <button
                            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                            onClick={() => {
                                setShowingNavigationDropdown(
                                    !showingNavigationDropdown
                                )
                            }}
                            aria-haspopup="true"
                        >
                            <span className="inline-flex items-center">
                                <TemplateIcon/>
                                <span className="ml-4">Pages</span>
                            </span>
                            <ArrowDown/>
                        </button>
                        <div
                            className={`${
                                showingNavigationDropdown
                                    ? 'visible'
                                    : 'invisible'
                            }`}
                        >
                            <ul
                                className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900 transition-all ease-in-out duration-300"
                                aria-label="submenu"
                            >
                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <a className="w-full" href="#">
                                        Login
                                    </a>
                                </li>
                                <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                                    <Link className="w-full" href={route('blank')}>
                                        Blank
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}