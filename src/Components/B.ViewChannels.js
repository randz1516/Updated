import React, {Component} from 'react'
import {ViewChannels} from '../Actions'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import './Components.css'
import AddChan from './B.AddChannel'
import {DeleteChannel, ViewMessages} from '../Actions'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class ListofChannels extends Component{
    deleteChannel=(id) =>{
        this.props.DeleteChannel(id);
    }
    viewMessage=(id)=>{
        this.props.ViewMessages(id);
    }   
    renderList(){
        return this.props.viewChannels.map((channel, i) => {
            return(
                <ListItem key={i} button onClick={()=> this.viewMessage(channel.id)}>
                    <ListItemText primary={channel.channel}/>
                    <IconButton aria-label="delete" className='btn-del' onClick={()=>this.deleteChannel(channel.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </ListItem>
            )
        })
    }
    
    render(){
        return(
            <div className='Channel-Room'>
                <List>
                   {this.renderList()}
                </List>
                <AddChan/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        viewChannels: Object.values(state.Channels.channel)
    }
}
export default connect(mapStateToProps, {ViewChannels, DeleteChannel, ViewMessages})(ListofChannels)