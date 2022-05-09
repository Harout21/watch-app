import * as actions from './actionTypes';

const initialState = {
    watchesPhotos: {},
    loading: '',
};

export const fetchWatchPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_WATCH_PHOTOS:
            return {
                ...state,
                watchesPhotos: {},
                loading: true,
            };
        case actions.GET_WATCH_PHOTOS_SUCCESS:
            return {
                watchesPhotos: action.payload,
                error: '',
                loading: false,
            };
        case actions.GET_WATCH_PHOTOS_FAIL:
            return {
                watchesPhotos: {},
                error: action.payload,
                loading: false,
            };
        default:
            return state
    }
};
