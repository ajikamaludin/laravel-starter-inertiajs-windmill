import React from 'react'
import SidebarContent from './SidebarContent'

export default function SidebarMobile(props) {
  const { showNavMobile } = props
  return (
      <>
          <div
              className={`fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${
                  showNavMobile ? 'visible' : 'invisible'
              }`}
          ></div>
          <aside
              className={`transition ease-in-out duration-150 fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden ${
                  showNavMobile ? 'visible' : 'invisible'
              }`}
              onClick={() => {}}
              onKeyDown={() => {}}
          >
              <SidebarContent/>
          </aside>
      </>
  )
}