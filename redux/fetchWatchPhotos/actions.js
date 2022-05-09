import * as actions from './actionTypes'
import axios from 'axios'

export const getWatchesSuccess = (data) => {
    return {
        type: actions.GET_WATCH_PHOTOS_SUCCESS,
        payload: data
    }
};

export const getWatchesFail = (err) => {
    return {
        type: actions.GET_WATCH_PHOTOS_FAIL,
        payload: err
    }
};

export const getWatchesAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://wordpress-624194-2033128.cloudwaysapps.com/wp-json/wp/v2/pages/156');
            dispatch(getWatchesSuccess(res?.data?.acf));
        } catch (err) {
            dispatch(getWatchesFail(err));
            console.log(err);
        }
    }
};
