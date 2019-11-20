import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Search from '../component/search'
import List from '../component/list'

import {searchItem} from '../redux/action'
class App extends Component{
    static propTypes={
        
    }

    state={
        dataInit:[
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ],
        dataInitProto:[
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ]
    }
    IsShow=(value)=>{
        if(value){
            const newArr=this.state.dataInit.filter((item)=>{
                        if (item.stocked){
                            return item
                        }
                    })
            this.setState({dataInit:newArr })
        }else{
            this.setState({dataInit:this.state.dataInitProto })
        }
    }
    inputSearch=(value)=>{
        const newArr=this.state.dataInitProto.filter((item)=>{
            if (item.name.indexOf(value)!==-1){
                return item
            } 
        })
        this.setState({dataInit:newArr })
    }
    render(){

        const {dataInit} =this.state
        return(
            <div className='box'>
                <h1>my first demo</h1>
                <hr/>
                <Search IsShow={this.IsShow} inputSearch={this.inputSearch}  />
                <br/>
                <List dataInit={dataInit} />
            </div>
            
        )
    }
}
