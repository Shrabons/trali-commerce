import { createContext, useReducer } from "react";

const Store = createContext()

const userDefaultvalue = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
}

function userReducers(state, action){
    // console.log(action)
    switch(action.type){
        case 'USER_LOGIN':
            return {...state, userInfo: action.payload}
        case 'USER_LOGOUT':
            return {...state, userInfo: null}
        default:
            return state
    }
} 


function StoreProvider(props){

    let [state, dispatch] = useReducer(userReducers,userDefaultvalue)

    let value = {state, dispatch}

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}

export { Store, StoreProvider };

