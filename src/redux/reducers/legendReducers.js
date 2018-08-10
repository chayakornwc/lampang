const initailState = {
        legend:{data:null,isLoading:true, isRejected:false}
}
    export default (state = initailState, action)=>{

        switch(action.type){
            case 'LOAD_LEGEND_PENDING':
            return {...state, legend:{data:null, isLoading:true, isRejected:false}}
            break;
            case 'LOAD_LEGEND_SUCCESS':
            return {...state, legend:{data:action.payload, isLoading:false, isRejected:false}}
            break;
            case 'LOAD_LEGEND_REJECTED':
            return {...state, legend:{data:null, data:action.payload, isLoading:false, isRejected:true}}
            break;
            
            default:
            return state
        }
    }