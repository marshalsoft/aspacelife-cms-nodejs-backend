'use client';
import { createContext, useContext, useState } from 'react';
import { GlobalStateProps } from '../utils/types';

const GlobalStateContext = createContext({});

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

const GlobalStateProvider = ({ children }:GlobalStateProps) => {
    const [state, setState] = useState({ user: null, theme: 'light' });
  
    // const setUser = (user) => {
    //   setState((prevState) => ({ ...prevState, user }));
    // };
  
    const toggleTheme = () => {
      setState((prevState) => ({
        ...prevState,
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      }));
    };
  
    return (<GlobalStateContext.Provider 
    value={{ state, toggleTheme }}
    >
    {children}
    </GlobalStateContext.Provider>);
  };

  export default GlobalStateProvider;