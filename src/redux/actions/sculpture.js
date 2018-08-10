import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const loadSculpture = () => {
    return(dispatch)=>{
        dispatch({type:'LOAD_SCULPTURE_PENDING'})
        return axios.get(`${BASE_URL}/sculpture`,{
        }).then(results =>{
            dispatch({type:'LOAD_SCULPTURE_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_SCULPTURE_REJECTED',payload: err.message})
        })
    }
}
export const loadSculptrueSc = ()=>{
    return (dispatch) =>{
        dispatch({
            type:'LOAD_SCULPTURESC_PENDING'
        })
        return axios.get(`${BASE_URL}/sculptureSc`,{
        }).then(results =>{
            dispatch({type:'LOAD_SCULPTURESC_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_SCULPTURESC_REJECTED',payload: err.message})
        })
    }
    }
    
