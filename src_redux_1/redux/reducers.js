import {UP,DOWN} from './actions-types'
export function counter(state=0,action){
    console.log('counter()',state,action)
    switch(action.type){
        case UP:
            return state+action.data
        case DOWN:
            return  state-action.data>0?state-action.data:state
        default:
            return state   
    }
}   