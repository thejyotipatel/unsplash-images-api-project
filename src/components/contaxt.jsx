import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [searchText, setSearchText] = useState('cat')

  const toggleThame = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)

    const html = document.querySelector('html')
    html.getAttribute('data-theme') == 'light'
      ? html.setAttribute('data-theme', 'dark')
      : html.setAttribute('data-theme', 'light')
  }

  return (
    <AppContext.Provider
      value={{ toggleThame, isDarkTheme, searchText, setSearchText }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
