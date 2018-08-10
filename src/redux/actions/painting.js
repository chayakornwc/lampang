import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const loadPainting = () => { //  initial course term  keeping empty string(*)
    return(dispatch)=>{
        dispatch({type:'LOAD_PAINTING_PENDING'})
        return axios.get(`${BASE_URL}/painting`,{
        }).then(results =>{
            dispatch({type:'LOAD_PAINTING_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_PAINTING_REJECTED',payload: err.message})
        })
    }
}
