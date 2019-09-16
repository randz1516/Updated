import React, {Component} from 'react'
import './Components.css'
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import AddServer from './A.AddServer'
import {DisplayServer, DeleteServer, ViewChannels} from '../Actions';

class ListofServer extends Component{
    componentDidMount(){
        console.log("Displaying Servers!!")
        this.props.DisplayServer();
    }
    deleteServer = (id) => {
        this.props.DeleteServer(id);
    }
    viewchannels = () => {
        this.props.ViewChannels();
    }
    renderList(){
        return this.props.ViewServers.map((server, i) => {
            return(
                <ListItem key={i} button onClick={()=>this.viewchannels}>
                    <ListItemText primary={server.server}/>
                    <IconButton aria-label="delete" className='btn-del' onClick={()=>this.deleteServer(server.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </ListItem>
            )
        })
    }
    render(){
        const data = this.props.ViewServers
        console.log('******', data)
        return(
            <div className='Server-Room'>
                <List>
                    {this.renderList()}
                </List>
                <AddServer/>
                
            </div>
           
            )
        }
    }
const mapStateToProps = state => {
    return {
      ViewServers: Object.values(state.Servers.server)
    }
  };

export default connect(mapStateToProps, {DisplayServer, DeleteServer, ViewChannels})(ListofServer)
    