import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleThame = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)

    const html = document.querySelector('html')
    html.getAttribute('data-theme') == 'light'
      ? html.setAttribute('data-theme', 'dark')
      : html.setAttribute('data-theme', 'light')
  }

  return (
    <AppContext.Provider value={{ toggleThame, isDarkTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
