'use client'
import React, { createContext, useContext, useState } from 'react';

// Create the context
const StateContext = createContext();

export function ContextProvider({ children }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);


  return (
    <StateContext.Provider value={{ isSubmitted, setIsSubmitted, success, setSuccess }}>
      {children}
    </StateContext.Provider>
  );
}

// Create a custom hook to access the context
 const useContextValues = () =>{
  return useContext(StateContext);
}

export { useContextValues}