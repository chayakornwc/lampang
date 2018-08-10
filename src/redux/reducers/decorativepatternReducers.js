const initalState = {
    decorativepattern:{data:null,isLoading:true, isRejected:false}
}
 
export default (state = initalState, action) =>{
        switch(action.type){
            case 'LOAD_DECORATIVEPATTERN_PENDING':
            return {...state, decorativepattern:{data:null, isLoading:true, isRejected:false}}
            case 'LOAD_DECORATIVEPATTERN_SUCCESS':
            return {...state, decorativepattern:{data:action.payload, isLoading:false, isRejected:false}}
            case 'LOAD_DECORATIVEPATTERN_REJECTED':
            return {...state, decorativepattern:{data:action.payload, isLoading:false, isRejected:true}}
       
            default:
            return state
        }
}