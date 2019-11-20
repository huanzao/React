import React,{Component} from 'react'
export default class News extends Component{
    state={
        newsArray:[
            'asdfasdfsad','而发士大夫','阿桑的歌','噶士大夫'
        ]
    }
    render(){
        const {newsArray} =this.state
        return(
            <ul>
                {
                    newsArray.map((item,index)=>(
                        <div key={index}> {item} </div>
                    ))
                }
            </ul>
        )
    }
}