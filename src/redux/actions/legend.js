import axios from 'axios';
import config from '../../configure';
const BASE_URL = config.BASE_URL;

export const loadLegend = ()=>{
    return dispatch =>{
        dispatch({
            type:'LOAD_LEGEND_PENDING'
        })
        return axios.get(`${BASE_URL}/legend`).then(results=>{
            dispatch({
                type:'LOAD_LEGEND_SUCCESS',
                payload:results.data
            })
        }).catch(err =>{
            dispatch({
                type:'LOAD_LEGEND_REJECTED',
                payload:err.message
            })
        })
    }
}