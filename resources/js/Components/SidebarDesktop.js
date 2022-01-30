import React from 'react'
import SidebarContent from './SidebarContent'

export default function SidebarDesktop() {
  return (
      <>
          <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
              <SidebarContent/>
          </aside>
      </>
  )
}