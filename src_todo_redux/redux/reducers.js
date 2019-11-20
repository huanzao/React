import {ADD_COMMENT,DEL_COMMENT} from './actions-type'
const initComment=[
    {username:'Tom',content:'React太难了*****'},
    {username:'Jack',content:'React太简单了'}
]
export function comments(state=initComment,action){
    switch(action.type){
        case ADD_COMMENT:
            return [action.data,...state]
        case DEL_COMMENT:
            return state.filter((comment,index)=>index!==action.data)
        default:    
            return state    
    }
}