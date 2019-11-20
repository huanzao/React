import { createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {mySearch} from './reducer'
export default createStore(
    mySearch,
    applyMiddleware(thunk)
)