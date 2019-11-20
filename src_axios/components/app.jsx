import React,{Component} from 'react'
import Search from './search'
import Content from './content'
export default class App extends Component{
    state={
        searchName:''
    }
    setSearchName=(searchName)=>{
        this.setState({searchName})
    }
    render(){
        return(
            <div className='box'>
                <h1>搜索</h1>
                <Search setSearchName={this.setSearchName} />
                <Content searchName={this.state.searchName} />
            </div>
        )
    }
}