const initialState ={
    festivaltemp:{data:null, isLoading:true, isRejected:false}
}
    export default (state = initialState,action)=>{
        switch(action.type){
            case 'LOAD_FESTIVALTEMP_PENDING':
            return {...state, festivaltemp:{data:null, isLoading:true, isRejected:false}}
            break;
            case 'LOAD_FESTIVALTEMP_SUCCESS':
            return {...state, festivaltemp:{data:action.payload, isLoading:false, isRejected:false}}
            break;
            case 'LOAD_FESTIVALTEMP_REJECTED':
            return {...state, festivaltemp:{data:action.payload, isLoading:false, isRejected:true}}
        

            default:
            return state
        }
    }