const initialState = {
    bhuddarts:{data:null, isLoading:true, isRejected:false}
}
export default (state = initialState, action)=>{
        switch(action.type){
            case 'LOAD_BHUDDARTS_PENDING':
            return {...state, bhuddarts:{data:null, isLoading:true, isRejected:false}}
            break;
            case 'LOAD_BHUDDARTS_SUCCESS':
            return {...state, bhuddarts:{data:action.payload, isLoading:false, isRejected:true}}
            break;
            case 'LOAD_BHUDDARTS_REJECTED':
            return {...state, bhuddarts:{data:action.payload, isLoading:false, isRejected:true}}
        

            default:
            return state
        }
}