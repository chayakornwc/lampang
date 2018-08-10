import axios from 'axios';
import config from '../../configure';
const BASE_URL = config.BASE_URL

export const loadHistory = () =>{
    return dispatch =>{
        dispatch({
            type:'LOAD_HISTORY_PENDING'
        })
        return axios.get(`${BASE_URL}/history`).then(results=>{
            dispatch({
                type:'LOAD_HISTORY_SUCCESS',
                payload:results.data
            })
        }).catch(err=>{
            dispatch({
                type:'LOAD_HISTORY_REJECTED',
                payload:err.message
            })
        })
    }
}