import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from '../components/MyNavLink'
import News from './news'
import Message from './message'
export default class Home  extends Component{
    render(){
        return(
            <div>
                <h1>Home组件</h1>
                <hr/>
                <ul>
                    <li> <MyNavLink to='/home/news'>news</MyNavLink> </li>
                    <li> <MyNavLink to='/home/message'>message</MyNavLink> </li>
                </ul>
                <hr/>
                <div >
                    <Switch>
                        <Route path='/home/news' component={News} />
                        <Route path='/home/message' component={Message} />
                        <Redirect to='/home/news' />
                    </Switch>
                </div>
            </div>
        )
    }
}