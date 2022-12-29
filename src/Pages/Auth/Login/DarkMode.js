import React from 'react'

export default function DarkMode() {
  const [darkMode, setDarkMode] = React.useState(false)
  function darkModeOn() {
    setDarkMode(true)
    document.body.classList.add('dark')
  }
  function darkModeOff() {
    setDarkMode(false)
    document.body.classList.remove('dark')
  }
  return (
    <label className="inline-flex fixed top-12 right-12 items-center mb-5 cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" onChange={darkMode ? darkModeOff : darkModeOn} />
      <div
        className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
         rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
         after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 
         after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
      <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
    </label>
  )
}
