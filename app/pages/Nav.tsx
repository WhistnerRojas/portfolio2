import React from 'react'
import NavStyle from '../styles/Nav.module.css'
import ThemeToggle from '../components/ThemeToggle'

const Nav = () => {
    const mainMenu = ['home', 'about', 'portfolio', 'experiences', 'education']
    const mainMenuStyle = 'font-semibold'
  return (
    <>
        <ul className='text-center'>
            {
                mainMenu.map((item, index) => {
                    return <li id={`menu-${item}`} className={`${NavStyle.mainNav} ${mainMenuStyle}`} key={index}>{item.toLocaleUpperCase()}</li>
                })
            }
        </ul>
        <ThemeToggle/>
    </>
  )
}

export default Nav