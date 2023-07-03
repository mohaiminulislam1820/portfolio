import { createContext, useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer/Footer";

export const DarkModeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const getDarkModeStatus = () => {
    if (localStorage.getItem('dark-mode') == 'true')
      setDarkMode(true);
    else {
      localStorage.setItem('dark-mode', 'false');
      setDarkMode(false);
    }
  }
  useEffect(() => {
    getDarkModeStatus();
  }, [])
  const contexts = { darkMode, setDarkMode };
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Toaster position="top-right" />
      
      <DarkModeContext.Provider value={contexts}>
        <Header></Header>
        <Home></Home>
      </DarkModeContext.Provider>

      <Footer></Footer>
    </div>
  );
};

export default App;