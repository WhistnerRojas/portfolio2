'use client'
import React, { useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('emerald');

    const toggleTheme = ()=> {
        const newTheme = theme === 'emerald' ? 'dark' : 'emerald'
        const htmlElement = document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(newTheme)
    }
  return (
    <>
        <input type="checkbox" className="toggle toggle-info" onClick={toggleTheme}/>
    </>
  )
}

export default ThemeToggle