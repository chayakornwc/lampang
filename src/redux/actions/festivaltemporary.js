import axios from 'axios'
import config from '../../configure';

const BASE_URL = config.BASE_URL

export const loadFestivaltemporary = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'LOAD_FESTIVALTEMP_PENDING'
        })
        return axios.get(`${BASE_URL}/festivaltemporary`).then(results =>{
            dispatch({
                type:'LOAD_FESTIVALTEMP_SUCCESS',
                payload:results.data
            })
        }).catch(err=>{
            dispatch({
                type:'LOAD_FESTIVALTEMP_REJECTED',
                payload:err.message
            })
        })
    }
}