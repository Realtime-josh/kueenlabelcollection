const defaultState = {
  hoverState: false,
  hoverStateht: false,
  hoverStatehc: false,
  hoverStatelc: false,
  hoverStatecu: false,
  modalStatus: undefined,
  shopAll : false,
  hairTexture: false,
  kueenKits:false,
  kueenLashes:false,
  hairCare:false,
  hairTextureCat: false,
  hairCareCat: false,
  hairLocations: false,
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
    case 'SET_MODAL_STATE':
      return {
        ...state,
        modalStatus : action.modalStatus
      }
    case 'SET_SHOP_ALL_STATE':
      return {
        ...state,
        shopAll : action.shopAll
      }
    case 'SET_HAIR_TEXTURE_STATE':
      return {
        ...state,
        hairTexture : action.hairTexture
      }
    case 'SET_KUEEN_KITS_STATE':
      return {
        ...state,
        kueenKits : action.kueenKits
      }
    case 'SET_KUEEN_LASHES_STATE':
      return {
        ...state,
        kueenLashes : action.kueenLashes
      }
    case 'SET_HAIR_CARE_STATE':
      return {
        ...state,
        hairCare : action.hairCare
      }
    case 'SET_HAIR_TEXTURE_CAT':
      return {
        ...state,
        hairTextureCat : action.hairTextureCat
      }
    case 'SET_HAIR_CARE_CAT':
      return {
        ...state,
        hairCareCat : action.hairCareCat
      }
    case 'SET_HAIR_CARE_LOCATE':
      return {
        ...state,
        hairLocations : action.hairLocations
      }
    case 'SET_HAIR_CONTACT':
      return {
        ...state,
        hairContact : action.hairContact
      }
    default:
      return state;
  };
}
