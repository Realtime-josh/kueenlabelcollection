const defaultState = {
  hoverState: false,
  hoverStateht: false,
  hoverStatehc: false,
  hoverStatelc: false,
  hoverStatecu: false,
};

export default (state = defaultState, action) => {
  switch(action.type){
    case 'SET_HOVER':
      return {
        ...state,
        hoverState: action.hoverState,
      }
    case 'SET_HOVERHT':
      return {
        ...state,
        hoverStateht: action.hoverStateht,
      }
    case 'SET_HOVERHC':
      return {
        ...state,
        hoverStatehc: action.hoverStatehc,
      }
    case 'SET_HOVERLC':
      return {
        ...state,
        hoverStatelc: action.hoverStatelc,
      }
    case 'SET_HOVERCU':
      return {
        ...state,
        hoverStatecu: action.hoverStatecu,
      }
    default:
      return state;
  };
}
