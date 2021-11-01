import { createContext, useReducer } from "react";
import LayoutReducer from "./LayoutReducer";

const initialLayoutState = {
  sidebarIsPermanent: true,
  sidebarWidth: 240,
  sidebarIsOpen: true,
};
//Creating context
export const LayoutContext = createContext();

//Creating provider component
export const LayoutProvider = ({ children }) => {
  const [layoutState, dispatch] = useReducer(
    LayoutReducer,
    initialLayoutState
  );

  function setSidebarPermanence(isPermanent) {
    dispatch({
      type: "SET_SIDEBAR_PERMANENCE",
      payload: isPermanent,
    });
  }

  // function setSidebarWidth(sidebarWidth) {
  //   dispatch({
  //     type: "SET_SIDBAR_WIDTH",
  //     payload: sidebarWidth,
  //   });
  // }

  return (
    <LayoutContext.Provider
      value={{
        layoutState,
        dispatch,
        setSidebarPermanence,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
