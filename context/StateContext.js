'use client'
import React, { createContext, useContext, useState } from 'react';

// Create the context
const StateContext = createContext();

export function ContextProvider({ children }) {
    const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <StateContext.Provider value={{ isSubmitted, setIsSubmitted }}>
      {children}
    </StateContext.Provider>
  );
}

// Create a custom hook to access the context
export function useContextValues() {
  return useContext(StateContext);
}
