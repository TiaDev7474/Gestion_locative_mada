import React from 'react'
import { NavBarHeader } from '../Header/NavBarHeader'
import { AsideNav } from '../NavBar/AsideNav'

type MainLayoutProps = {
    children: React.ReactNode
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='w-full'>
         <NavBarHeader />
         <main className='flex justify-between px-[5%]'>
            <aside>
                <AsideNav />
            </aside>
            <section className='w-full'>
               { children }
            </section>
            <aside>

            </aside>
         </main>
        
       
    </div>
  )
}
