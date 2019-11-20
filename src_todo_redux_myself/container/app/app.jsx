import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Add from '../../components/add/add'
import List from '../../components/list/list'
import {addComment,delComment} from '../../redux/actions'
class  App extends Component{
    
    static propTypes={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
        delComment:PropTypes.func.isRequired
    }

    addComment=(comment)=>{
        const {comments} =this.props.comments
        this.props.addComment(comments)
    }
    delComment=(index)=>{
        const {comments} =this.props.comments
        this.props.delComment(comments)
    }
    render (){
        const {comments,addComment,delComment}=this.props
        return(
            <div className='box'>
                <h2>评论列表</h2>
                <hr/>
                <div>
                    <div>
                        <Add addComment={addComment} />
                    </div>
                    <div>
                        <List comments={comments} delComment={delComment} />
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({comments:state}),//state就是一个comments数组
    {addComment,delComment}
)(App)
