import { combineReducers } from 'redux'

const initialState = {
    access_token: null,
    refresh_token: null
}

const root = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return {
                ...state,
                access_token: action.payload
            }
        case 'SET_REFRESH_TOKEN':
            return {
                ...state,
                refresh_token: action.payload
            }
        default:
            return state
    }
}

export default combineReducers({
    root,
    // Here you can add more reducers
})