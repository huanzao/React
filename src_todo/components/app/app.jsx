import React,{Component} from 'react'
import Add from '../add/add'
import List from '../list/list'
export default class  App extends Component{
    state={
        comments:[
            {username:'Tom',content:'React太难了'},
            {username:'Jack',content:'React太简单了'}
        ]
    }
    addComment=(comment)=>{
        const {comments} =this.state
        comments.unshift(comment)
        this.setState({comments})
    }
    delComment=(index)=>{
        const {comments}=this.state
        comments.splice(index,1)
        this.setState({comments})
    }
    render (){
        const {comments}=this.state
        return(
            <div className='box'>
                <h2>评论列表</h2>
                <hr/>
                <div>
                    <div>
                        <Add addComment={this.addComment} />
                    </div>
                    <div>
                        <List comments={comments} delComment={this.delComment} />
                    </div>
                </div>
            </div>
        )
    }
}
