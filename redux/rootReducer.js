import { combineReducers } from 'redux'
import {fetchDataReducer} from './fetchDataHomepage/reducer'
import {fetchWatchPhotosReducer} from './fetchWatchPhotos/reducer'

export default combineReducers({
    fetchDataReducer,
    fetchWatchPhotosReducer,
})
