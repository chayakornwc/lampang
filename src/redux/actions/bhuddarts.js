import axios from 'axios'
import config from '../../configure'
const BASE_URL = config.BASE_URL

export const loadBguddarts  = ()=>{
    return (dispatch) =>{
        dispatch({
            type:'LOAD_BHUDDARTS_PENDING'
        })
        return axios.get(`${BASE_URL}/buddarts`).then(results=>{
            dispatch({
                type:'LOAD_BHUDDARTS_SUCCESS',
                payload:results.data
            })
        }).catch(err=>{
            dispatch({
                type:'LOAD_BHUDDARTS_REJECTED',
                payload:err.message
            })
        })
    }
}