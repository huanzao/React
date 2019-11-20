import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../item/item' 
export default class  List extends Component{

    static propTypes={
        comments:PropTypes.array.isRequired,
        delComment:PropTypes.func.isRequired
    }

    render (){
        const {comments,delComment} =this.props
        const display=comments.length===0?'block':'none'
        return(
            <div>
                <h5>评论回复</h5>
                <p style={{display}}>暂无评论</p>
                <ul className='pinglun_list'>
                    { comments.map((item,index)=><Item delComment={delComment} comments={item} key={index} index={index} />) }
                </ul>
            </div>
        )
    }
}
// List.propTypes={
//     comments:PropTypes.array.isRequired
// }