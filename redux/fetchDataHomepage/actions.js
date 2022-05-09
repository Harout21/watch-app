import * as actions from './actionTypes'
import axios from 'axios'

export const getDataSuccess = (data) => {
    return {
        type: actions.GET_DATA_SUCCESS,
        payload: data
    }
};

export const getDataFail = (err) => {
    return {
        type: actions.GET_DATA_FAIL,
        payload: err
    }
};

export const getDataAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('data-link-you-want');
            dispatch(getDataSuccess(res.data));
        } catch (err) {
            dispatch(getDataFail(err));
            console.log(err);
        }
    }
};
