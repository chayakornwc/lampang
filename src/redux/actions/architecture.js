

import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const loadArchitecture = () => { //  initial course term  keeping empty string(*)
    return(dispatch)=>{
        dispatch({type:'LOAD_ARICHITECTURE_PENDING'})
        return axios.get(`${BASE_URL}/architecture`,{
        }).then(results =>{
            dispatch({type:'LOAD_ARICHITECTURE_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_ARICHITECTURE_REJECTED',payload: err.message})
        })
    }
}