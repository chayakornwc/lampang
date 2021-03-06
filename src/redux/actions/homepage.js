import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL
export const loadKnowledge = (id='',term='') => { //  initial course term  keeping empty string(*)
    return(dispatch)=>{
        dispatch({type:'LOAD_HOME_PENDING'})
        return axios.get(`${BASE_URL}/knowledge?id=${id}&words=${term}`,{
        }).then(results =>{
            dispatch({type:'LOAD_HOME_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_HOME_REJECTED',payload: err.message})
        })
    }
}