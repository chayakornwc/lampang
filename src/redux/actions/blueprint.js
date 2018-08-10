import axios from 'axios';
import configure from '../../configure';

const BASE_URL   = configure.BASE_URL;

export  function loadBlueprint(){
    return (dispatch)=>{
        dispatch(
            {
                type:'LOAD_BLUEPRINT_PENDING'
            }
        )
        return axios.get(`${BASE_URL}/blueprint`).then(results =>{
            dispatch({
                type:'LOAD_BLUEPRINT_SUCCESS',
                payload:results.data
            })
        }).catch(err =>{
            dispatch({
                type:'LOAD_BLUEPRINT_REJECTED',
                payload:err.message
            })
        })
        
    }
}