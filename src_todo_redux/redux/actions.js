import {ADD_COMMENT,DEL_COMMENT} from './actions-type'
export const addComment=(comment)=>({type:ADD_COMMENT,data:comment})
export const delComment=(index)=>({type:DEL_COMMENT,data:index})