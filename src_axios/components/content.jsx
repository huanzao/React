import React,{Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
export default class Content extends Component{
    state={
        initView:true,
        loading:false,
        users:null,
        errorMsg:false
    }
    static propsTypes={
        searchName:PropTypes.string.isRequired
    }
    componentWillReceiveProps(newProps){
        const {searchName} =newProps
        //更新状态
        this.setState({
            initView:false,
            loading:true,
        })
        const url=`https://api.github.com/search/users?q=${searchName}`
        axios.get(url).then((res)=>{
                console.log(res.data)
                const users=res.data.items.map(item=>{
                                return{
                                    name:item.login,url:item.html_url,avatarUrl:item.avatar_url
                                } 
                            })
                console.log(3333,users)            
                this.setState({
                    loading:false,
                    users:users
                })
                            
            }).catch((err)=>{
                this.setState({
                    loading:false,
                    errorMsg:true
                })
            }) 
    }

    render(){
        const {initView,loading,users,errorMsg}=this.state
        if(initView){
            return(
                <h3>暂无内容</h3>
            )
        }else if(loading){
            return(
                <h3>加载中请稍后</h3>
            )
        }else if(errorMsg){
            return(
                <h3>网络错误</h3>
            )
        }else if(users.length===0){
            return(
                <h3>没有搜索到内容</h3>
            )
        } else{
            return(
                <div className='listbox'>
                    {
                        users.map((item,index)=>(
                            <div key={index}>
                                <img src={item.avatarUrl} alt=""/>
                                <a target='_blank'  href={item.url}>12313</a>
                            </div>
                        ))
                    }    
                </div>
            )
        }
        
    }
}