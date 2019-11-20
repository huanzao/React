import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class  Add extends Component{

    static propTypes={
        addComment:PropTypes.func.isRequired
    }

    state={
        username:'',
        content:''
    }
    handNameChange=(e)=>{
        const username=e.target.value
        this.setState({username})
    }
    handContentChange=(e)=>{
        const content=e.target.value    
        this.setState({content})
    }
    handSubmit=()=>{
        const {username,content}=this.state
        if(username==="" || content===""){
            return false
        }
        this.props.addComment(this.state)
        this.setState({
            username:'',
            content:''
        })
    }
    render (){
        const {username,content} = this.state
        return(
            <div>
                <div>
                    <h4>用户名</h4>
                    <input type="text" value={username} onChange={this.handNameChange} />
                </div>
                <div>
                    <h4>评论内容</h4>
                    <textarea  cols="30" rows="3" value={content} onChange={this.handContentChange}></textarea>
                </div>
                <input type="button" onClick={this.handSubmit} value='提交' />
            </div>
        )
    }
}