import React, { Component } from 'react'
import './Components.css'
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';

class ChatWindow extends Component{
    renderMessages(){
        return this.props.ListofMessages.map((message, i)=>{
            return(
                <div key = {i}>
                    <ListItem alignItems="flex-start" key={i}>
                    <ListItemAvatar>
                        <Avatar className="green-avatar">
                            <AssignmentIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Randy"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className="message-input"
                                color="textPrimary"
                            >
                                Message
                            </Typography>
                            {": " + message.message}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
            )
        })
    }
    render(){
        return(
            <div className='viewchat'>
            <List className='message'>
                {this.renderMessages()}
            </List>
            </div>
        )
    }
}
const mapStateToProp = state =>{
    return {
        ListofMessages: Object.values(state.Messages.message)
    }
}

export default connect(mapStateToProp)(ChatWindow)