import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from './MyNavLink'
import About from '../views/about'
import Home from '../views/home'
export default class App extends Component{
    render(){
        return(
            <div >
                <h1>React Router Demo</h1>
                <hr/>
                <div className='box'>
                    <div>
                        <p><MyNavLink to='/about'>About</MyNavLink></p>
                        <p><MyNavLink to='/home' >Home</MyNavLink></p>
                    </div>
                    <div>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Route path='/home'  component={Home} />
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}