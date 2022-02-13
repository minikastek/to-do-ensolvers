import { types } from "../components/types/types";

const initialState={
    uid:123123,
    name: 'Nicolas',
    dir:{
        b:12
    }
}

export const authReducer = ( state={} , action) => {

    switch (action.type) {

        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        
        case types.logout:
            return { }

        default:
            return state;
    }
}