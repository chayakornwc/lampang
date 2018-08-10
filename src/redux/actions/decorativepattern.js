

import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const loadDecorativepattern  = ()=>{
    return dispatch => {
        dispatch({
            type:'LOAD_DECORATIVEPATTERN_PENDING'
        })
        return axios.get(`${BASE_URL}/decorativepattern`).then(
            results => {
                dispatch ({
                    type:'LOAD_DECORATIVEPATTERN_SUCCESS',
                    payload:results.data
                })
            }
        ).catch( err =>{
            dispatch({
                type:'LOAD_DECORATIVEPATTERN_REJECTED',
                payload:err.message
            })
        })
    }

}