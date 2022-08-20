const initialState = {
    isLightOn: true
  };
  
  const lightReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ON":
        return {
          ...state,
          isLightOn: true
        };
      case "OFF":
        return {
          ...state,
          isLightOn: false
        };
      default:
        return state;
    }
  };
  
  export default lightReducer;
  