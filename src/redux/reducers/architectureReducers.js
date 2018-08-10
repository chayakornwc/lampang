const initialState = {
    architectures:{data:null, isLoading:true, isRejected: false},
}

export default (state = initialState, action) =>{

    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_ARICHITECTURE_PENDING':
        return{...state, architectures:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_ARICHITECTURE_SUCCESS':
        return{...state, architectures:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_ARICHITECTURE_REJECTED':
        return{...state, architectures:{data:action.payload, isLoading:false, isRejected:true}}

       
        default: 
        return state
    }
}