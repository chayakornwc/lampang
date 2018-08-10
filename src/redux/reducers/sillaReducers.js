const initialState = {
    silla:{data:null, isLoading:true, isRejected: false},
}

export default (state = initialState, action) =>{

    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_SILLA_PENDING':
        return{...state, silla:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_SILLA_SUCCESS':
        return{...state, silla:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_SILLA_REJECTED':
        return{...state, silla:{data:action.payload, isLoading:false, isRejected:true}}
        default :
        return state
        
    }
}