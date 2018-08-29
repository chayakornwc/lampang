

import axios from 'axios';
//lib

import config from '../../configure';
//config
const BASE_URL = config.BASE_URL

export const saveSurvey = (data) => { //  initial course term  keeping empty string(*)
    return(dispatch)=>{
        dispatch({type:'SAVE_SURVER_PENDING'})
        return axios.post(`${BASE_URL}/survey`,{
        data:data
        }).then(results =>{
            dispatch({type:'SAVE_SURVER_SUECCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'SAVE_SURVER_REJECTED',payload: err.message})
        })
    }
}
export const loadSurvey =() =>{
    return dispatch =>{
    dispatch({type:'LOAD_SURVEY_PENDING'})
        return axios.get(`${BASE_URL}/survey`,{
        }).then(results =>{
            dispatch({type:'LOAD_SURVEY_SUCCESS', payload:results.data})
        }).catch(err =>{
            dispatch({type:'LOAD_SURVEY_REJECTED',payload: err.message})
        })
    }
}