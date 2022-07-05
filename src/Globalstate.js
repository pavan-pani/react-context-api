import { createContext, useReducer } from "react";
import Appreducer from './appReducer'
import { appData } from "./appData";

const initialstate={
    users:[
        {id:1, name:'user one'},
        {id:2, name:'user two'},
        {id:3, name:'user three'}
    ]
}

export const Globlecontext=createContext(initialstate)



export const GlobleProveder=({children})=>{
    const [state, dispatch] =useReducer(Appreducer, initialstate)

    //actions
    const remove=(id)=>{
        dispatch({
            type:'remove_user',
            payload:id
        })
    }

    const adduser=(user)=>{
        dispatch({
            type:'add_user',
            payload:user
        })
    }

    const edituser=(user)=>{
        dispatch({
            type:'edit_user',
            payload:user
        })
    }

    return(
        <Globlecontext.Provider value={{
            users:state.users,
            remove,
            adduser, edituser
            }}>
            {children}
        </Globlecontext.Provider>
    )
}