import { combineReducers } from 'redux'

const initialState = {
    token: null
}

const root = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    root,
    // Here you can add more reducers
  })