import React from 'react'
import { NavBarHeader } from '../Header/NavBarHeader'
import { AsideNav } from '../NavBar/AsideNav'

type MainLayoutProps = {
    children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='w-full px-[5%]'>
        <header>
            <NavBarHeader />
        </header>
         <main className='flex justify-between'>
            <aside>
                <AsideNav />
            </aside>
            <section>
               { children }
            </section>
            <aside>

            </aside>
         </main>
        
       
    </div>
  )
}
