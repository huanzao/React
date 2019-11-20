import React,{Component} from 'react'

import PropTypes from 'prop-types'

export default class  Item extends Component{

    static propTypes={
        comments:PropTypes.object.isRequired,
        delComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
    handClick=()=>{
        const {comments,delComment,index}=this.props
        if(window.confirm(`确定删除${comments.username}的评论吗`)){
            delComment(index)
        }
    }
    render (){
        const { comments} =this.props
        return(
            <li>
                <p><span>{ comments.username+'说' }</span><button onClick={this.handClick}>删除</button></p>
                <div>{ comments.content }</div>
            </li>
        )
    }
}