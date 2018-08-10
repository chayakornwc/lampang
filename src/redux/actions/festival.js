import axios from 'axios'
import config from '../../configure';
const BASE_URL = config.BASE_URL

export const loadFestival = ()=>{
    return (dispatch) => {
        dispatch({
            type:'LOAD_FESTIVAL_PENDING'
        })
        return axios.get(`${BASE_URL}/festival`).then(
            results =>{
                dispatch({
                    type:`LOAD_FESTIVAL_SUCCESS`,
                    payload:results.data
                })
            }
        ).catch(err=>{
            dispatch({
                type:'LOAD_FESTIVAL_REJECTED',
                payload: err.message
            })
           
        })
    }
}