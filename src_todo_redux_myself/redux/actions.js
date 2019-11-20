import {ADD,DEL} from './actions-types'
export const addComment=(state)=>({type:ADD,data:state})
export const delComment=(state)=>({type:DEL,data:state})