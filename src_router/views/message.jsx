import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import MyNavLink from '../components/MyNavLink'
import MessageDetail from './message_detail'
export default class Message extends Component{
    state={
        newsArray:[
            {id:1,title:"message001"},
            {id:2,title:"message002"},
            {id:3,title:"message003"},
            {id:4,title:"message004"}
        ]
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        // this.state.newsArray.map((item,index)=><li key={index}><a href={ `/home/message/message_detail/${item.id}`}>{'ID'+item.id+'----'+item.title}</a> </li>  )
                         this.state.newsArray.map((item,index)=><li key={index}><MyNavLink to={ `/home/message/message_detail/${item.id}`}>{'ID'+item.id+'----'+item.title}</MyNavLink> </li>  )
                        //用a标签跳转是非路由链接 会刷新页面 体验不好
                        //用NavLink跳转为路由链接 不会刷新页面
                    }
                </ul>
                <Route path='/home/message/message_detail/:id' component={MessageDetail} />        
            </div>
            
        )
    }
}