const initialState = {
    galaxy:{data:null, isLoading:true, isRejected:false}
}
export default (state=initialState, action)=>{
        switch(action.type){
            case 'LOAD_GALAXY_PENDING':
            return {...state, galaxy:{data:null, isLoading:true, isRejected:false}}
             break;
             case 'LOAD_GALAXY_SUCCESS':
             return {...state, galaxy:{data:action.payload, isLoading:false, isRejected:false}}
             break;
             case 'LOAD_GALAXY_REJECTED':
             return {...state, galaxy:{data:action.payload, isLoading:false, isRejected:true}}
       
             default:
             return state

            }
}