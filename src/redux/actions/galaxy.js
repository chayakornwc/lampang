import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const loadGalaxy = ()=>{
    return dispatch =>{
        dispatch({
            type:'LOAD_GALEXY_PENDING'
        })
        return axios.get(`${BASE_URL}/galaxy`).then(results =>{
            dispatch({
                type:'LOAD_GALAXY_SUCCESS',
                payload:results.data
            })
        }).catch(err=>{
            dispatch({
                type:'LOAD_GALAXY_REJECTED',
                payload:err.message
            })
        })
    }
}