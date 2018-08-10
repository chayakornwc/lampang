const initialState = {
    blueprint:{data:null, isLoading:true, isRejected:false}

}
export default (state = initialState, action)=>{
    switch(action.type){
        case 'LOAD_BLUEPRINT_PENDING':
        return {...state, blueprint:{data:null, isLoading:true, isRejected:false}}
        break;
        case 'LOAD_BLUEPRINT_SUCCESS':
        return {...state, blueprint:{data:action.payload, isLoading:false, isRejected:false}}
        break;
        case 'LOAD_BLUEPRINT_REJECTED':
        return {...state, blueprint:{data:action.payload, isLoading:false, isRejected:true}}
  

        default:
        return state
    }
}