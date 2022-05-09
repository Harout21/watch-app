import React from 'react';
import {MetroSpinner} from "react-spinners-kit";

const Loading = () => {
    return (
        <MetroSpinner
            size={50}
            color="#686769"
            loading={true}/>
    );
};

export default Loading;
