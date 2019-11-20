import {UP,DOWN} from './actions-types'
export const up=(number)=>({type:UP,data:number})
export const down=(number)=>({type:DOWN,data:number})
//同步action返回一个对象
//异步action返回一个函数
export const myAsync=(number)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(up(number))
        },1000)
    }
}