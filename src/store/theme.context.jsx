import { useReducer, createContext } from 'react';

export const ThemeContext = createContext({});

//Action types for the themeReducer
export const actiontypes = {
  LIGHTMODE: 'LIGHTMODE',
  DARKMODE: 'DARKMODE',
};


const initialState = { darkMode: true };

// Simple reducer for toggling dark mode
const themeReducer = (state, action) => {
  switch (action.type) {
    case actiontypes.LIGHTMODE:
      return { darkMode: false };
    case actiontypes.DARKMODE:
      return { darkMode: true };
    default:
        return state
  }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    return <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
}