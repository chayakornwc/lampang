const initialState = {
    painting:{data:null, isLoading:true, isRejected: false},
}

export default (state = initialState, action) =>{

    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_PAINTING_PENDING':
        return{...state, painting:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_PAINTING_SUCCESS':
        return{...state, painting:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_PAINTING_REJECTED':
        return{...state, painting:{data:action.payload, isLoading:false, isRejected:true}}

       
        default: 
        return state
    }
}