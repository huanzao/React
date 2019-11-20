import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class List extends Component{
    static propTypes={
        dataInit:PropTypes.array.isRequired
    }
    render(){
        const {dataInit} =this.props
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>库存</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataInit.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stocked?'有货':'没货'}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}