import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const loadSilla = () => {
    return(dispatch)=>{
        dispatch({type:'LOAD_SILLA_PENDING'})
        return axios.get(`${BASE_URL}/silla`,{
        }).then(results =>{
            dispatch({type:'LOAD_SILLA_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_SILLA_REJECTED',payload: err.message})
        })
    }
}

    
