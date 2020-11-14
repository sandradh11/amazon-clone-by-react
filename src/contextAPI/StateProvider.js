// set up data
// track basket

import React, { createContext, useReducer, useContext } from "react";

export const StateContext = createContext(); //--created data-layer --sandra

//--created provider to wrap the component ->sandra
export const StateProvider = ({ reducer, initialstate, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </StateContext.Provider>
);

//use it inside a components --sandra
export const useStateValue = () => useContext(StateContext);
