const initialState = {
    festival:{data:null, isLoading:true, isRejected:false}
}

    export default (state = initialState, action) =>{
        switch (action.type){
            case 'LOAD_FESTIVAL_PENDING':
            return {...state, festival:{data:null, isLoading:true, isRejeted:false}}
            case 'LOAD_FESTIVAL_SUCCESS':
            return {...state, festival:{data:action.payload, isLoading:true, isRejected:false}}
            case 'LOAD_FESTIVAL_REJECTED':
            return {...state, festival:{data:action.payload, isLoading:true,isRejected:false}}
        

            default:
            return state
        }
    }