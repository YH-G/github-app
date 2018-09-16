import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    inputValue: '',
    searchResults: [],
    favorites: [],
})

// change state based on action type
export default (state = defaultState, action) => {
    switch(action.type){
        case constants.GET_STORED_DATA:
            return state.set('favorites', fromJS(action.list))
        
        case constants.HANDLE_INPUT_CHANGE:
            return state.set('inputValue', action.inputValue)

        case constants.CLEAR_RESULTS:
            return state.set('searchResults', fromJS([]))
        
        case constants.GET_REPO_INFO:
            return state.set('searchResults', fromJS(action.result.slice(0, 10)))
        
        case constants.ADD_TO_FAVORITE: 
            return state.merge({
                favorites: state.get('favorites').push(action.item)
            })

        case constants.REMOVE_FROM_FAVORITES:
            return state.merge({
                favorites: state.get('favorites').splice(action.index, 1)
            })
        
        default:
            return state
    }
};