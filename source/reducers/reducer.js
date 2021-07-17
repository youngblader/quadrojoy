import { actionTypes } from '../actions/actionTypes';

const initialState = {
    data: [],
    activeItem: 'All',
    selectedItem: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.GET_PRODUCTS: {
        return {
            ...state,
            data: action.payload
        }
    }

    case actionTypes.CHANGE_TITLE: {
        return {
            ...state,
            activeItem: action.payload
        }
    }

    case actionTypes.SELECTED_ITEM: {
        return {
            ...state,
            selectedItem: action.payload
        }
    }
    default: return state;
  } 
}

export default reducer;