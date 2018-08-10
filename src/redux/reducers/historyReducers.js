const initialState ={
    history:{data:null, isLoading:true, isRejected:false}
}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'LOAD_HISTORY_PENDING':
        return {...state, history:{data:null, isLoading:true, isRejected:false}}
        break;
        case 'LOAD_HISTORY_SUCCESS':
        return {...state, history:{data:action.payload, isLoading:false, isRejected:false}}
        break;
        case 'LOAD_HISTORY_REJECED':
        return {...state, history:{data:action.payload, isLoading:false, isRejected:true}}
       
       
        default:
        return state
    }
}