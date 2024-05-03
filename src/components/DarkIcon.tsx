"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';

const DarkIcon = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const { setTheme, resolvedTheme } = useTheme()
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   // Your logic to toggle dark mode (e.g., update CSS classes)
  // };

  // return (
  //   <div className="flex items-center">
  //       <button className="mr-2" onClick={toggleDarkMode}>
  //           {isDarkMode ? (
  //           <FontAwesomeIcon icon={faSun} />
  //           ) : (
  //           <FontAwesomeIcon icon={faMoon} />
  //       )}
  //   </button>
  //   <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
  //   </div>

  // );

  if (resolvedTheme === 'dark') {
    // return <FiSun onClick={() => setTheme('light')} />
    return <FontAwesomeIcon icon={faSun} onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    // return <FiMoon onClick={() => setTheme('dark')} />
    return <FontAwesomeIcon icon={faMoon} onClick={() => setTheme('dark')} />
  }
};

// const DarkIcon = () => {
//   const { theme, setTheme } = useTheme();

//   const toggleDarkMode = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <div className="flex items-center">
//       <button className="mr-2" onClick={toggleDarkMode}>
//         {theme === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
//       </button>
//       <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
//     </div>
//   );
// };

export default DarkIcon;