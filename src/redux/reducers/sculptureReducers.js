const initialState = {
    scultures:{data:null, isLoading:true, isRejected: false},
    sculturesSC:{data:null, isLoading:true, isRejected: false},
}

export default (state = initialState, action) =>{

    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_SCULPTURE_PENDING':
        return{...state, scultures:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_SCULPTURE_SUCCESS':
        return{...state, scultures:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_SCULPTURE_REJECTED':
        return{...state, scultures:{data:action.payload, isLoading:false, isRejected:true}}

        case'LOAD_SCULPTURESC_PENDING':
        return{...state, sculturesSC:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_SCULPTURESC_SUCCESS':
        return{...state, sculturesSC:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_SCULPTURESC_REJECTED':
        return{...state, sculturesSC:{data:action.payload, isLoading:false, isRejected:true}}
        default: 
        return state
    }
}