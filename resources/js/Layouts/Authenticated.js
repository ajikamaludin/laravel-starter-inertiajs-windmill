import React, { useState } from 'react';
import SidebarDesktop from '@/Components/SidebarDesktop';
import SidebarMobile from '@/Components/SidebarMobile';
import NavProfile from '@/Components/NavProfile';
import NavNotification from '@/Components/NavNotification';
import { BurberMenu } from '@/Components/Icons';

export default function Authenticated({ auth, children }) {
    const [showNavMobile, setShowNavMobile] = useState(false)

    return (
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
                showNavMobile ? 'overflow-hidden' : ''
            }`}
        >
            {/* SideBar */}
            <SidebarDesktop />
            <SidebarMobile showNavMobile={showNavMobile} />
            <div className="flex flex-col flex-1">
                <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
                    <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                        <button
                            className="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                            onClick={() => setShowNavMobile(!showNavMobile)}
                            aria-label="Menu"
                        >
                            <BurberMenu/>
                        </button>
                        <div className="flex justify-center flex-1 lg:mr-32">
                            {/* navbar search */}
                        </div>
                        <ul className="flex items-center flex-shrink-0 space-x-6">
                            <li className="relative">
                                <NavNotification />
                            </li>
                            <li className="relative">
                                <NavProfile auth={auth}/>
                            </li>
                        </ul>
                    </div>
                </header>
                <main className="h-full pb-16 overflow-y-auto">
                    <div className="px-6 mx-auto py-12">{children}</div>
                </main>
            </div>
        </div>
    )
}
