import React from 'react'

const allMessage=[
    {id:1,content:'我爱你-中国'},
    {id:2,content:'我爱你-老婆'},
    {id:3,content:'我爱你-孩子'},
    {id:4,content:'我爱你-react'},
]
export default function MessageDetail(props){
    
    const {id}=props.match.params
    const message=allMessage.find((item)=>item.id===id*1)
    return(
        <ul>
            <li>ID:{message.id}</li>
            <li>Content:{message.content}</li>
        </ul>
    )
}