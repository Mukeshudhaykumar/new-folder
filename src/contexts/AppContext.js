import React, { useState, createContext, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Audio } from 'react-loader-spinner'

const AppContext = createContext();


export const AppProvider = ({ children }) => {
    
    const [loading, setloader] = useState(false);

    const toggleLoader = () => {
      setloader(prevState => !prevState); // Toggle the boolean value
    };
    
    const notify = (message, level) => {
      if (level === "success") {
        toast.success(message);
        return;
      } 
      if (level === "error") {
        toast.error(message);
        return;
      }
      toast(message);
    };
    

    return (<AppContext.Provider value={{ loading,setloader, notify, toast }}>
        {loading ? 
        <div style={{display: "flex", "justifyContent": "center", "alignItems": "center", height: "100vh"}}>
            <Audio
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
        </div>
        : children}
        <Toaster position="top-center" />
    </AppContext.Provider>);

}

export default AppContext