const initialState = {
    survey:{data:null, isLoading:true, isRejected: false},
}

export default (state = initialState, action) =>{

    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_SURVEY_PENDING':
        return{...state, survey:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_SURVEY_SUCCESS':
        return{...state, survey:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_SURVEY_REJECTED':
        return{...state, survey:{data:action.payload, isLoading:false, isRejected:true}}
        default :
        return state
        
    }
}