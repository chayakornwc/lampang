const initialState = {
    home:{data:null, isLoading:true, isRejected: false},
}

export default (state = initialState, action) =>{

    switch (action.type){
        // state ของข้อมูลทั้งหมด
        case'LOAD_HOME_PENDING':
        return{...state, home:{data:null, isLoading:true, isRejected:false}}
        case'LOAD_HOME_SUCCESS':
        return{...state, home:{data:action.payload, isLoading:false, isRejected:false}}
        case'LOAD_HOME_REJECTED':
        return{...state, home:{data:action.payload, isLoading:false, isRejected:true}}

       
        default: 
        return state
    }
}