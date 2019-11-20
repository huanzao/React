import {createStore,applyMiddleware} from 'redux'
import {myCompoent} from './reducers'
import thunk from 'redux-thunk'
export default createStore(
    myCompoent,
    applyMiddleware(thunk)
)