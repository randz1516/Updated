import React, { Component } from 'react'
// import Chip from '@material-ui/core/Chip';
// import Typography from '@material-ui/core/Typography';
import './Components.css'
import { connect } from 'react-redux'

class ChatWindow extends Component{
    render(){
        return(
            <div className='viewchat'>
                    {
                        // this.props.chatLogs.map((chat, i) => (
                        //     <div className='Input' key={i}>
                        //         <Chip label={'user'} className='chip'  />
                        //         <Typography variant='h6' className='msg-txt'>
                        //             <span className='chat-created-at'>{ chat.created_at }</span>
                        //         </Typography>
                        //     </div>
                        // ))
                    }
            </div>
        )
    }
}
const mapStateToProp = state =>{
    return {
        // chatLogs: state.Messages.message
    }
}

export default connect(mapStateToProp)(ChatWindow)