import {ADD,DEL} from './actions-types'
const initState=[
    {username:'Tom',content:'React太难了'},
    {username:'Jack',content:'React太简单了'}
]
export function myCompoent(state=initState,action){
    switch(action.type){
        case ADD:
            return [action.data,...state]
        case DEL:
            return state.filter((comment,index)=>index!==action.data)
        default:
            return  state          
    }
}