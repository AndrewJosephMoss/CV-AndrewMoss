export default function LayoutReducer(
  state,
  action
) {
  switch (action.type) {
    case "SET_SIDEBAR_PERMANENCE":
      return {
        ...state,
        sidebarIsPermanent: action.payload,
      };
    case "SET_SIDBAR_WIDTH":
      return {
        ...state,
        sidebarWidth: action.payload,
      };
    case "SET_SIDEBAR_OPEN":
      return {
        ...state,
        sidebarIsOpen: action.payload,
      };
    default:
      return state;
  }
}
