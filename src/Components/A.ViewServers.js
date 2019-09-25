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
    constructor(props){
        super(props);
        this.state = {
            active: false,
            setActive: false,
            id: null
        }
    }
    componentDidMount(){
        this.props.DisplayServer();
    }
    deleteServer = (id) => {
        this.props.DeleteServer(id);
    }
    // viewchannels = (id) => {
    //     this.props.ViewChannels(id);
    //     id.preventDefualt();
    //     this.setActive(!this.active);       
    // }
    pickSever = (id) => {
        if(this.props.ViewChannels(id) === id){
            this.setState({
                color: this.id ? 'green' : null
            })
        }
    }
    renderList(){
        return this.props.ViewServers.map((server, i) => {
            return(
                <ListItem key={i} button
                // className={this.active === false ? null : "color-btn"} 
                onClick={()=>this.pickSever(server.id[1])
                }>
                    <ListItemText primary={server.server}/>
                    <IconButton aria-label="delete" className='btn-del' onClick={()=>this.deleteServer(server.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </ListItem>
            )
        })
    }
    render(){
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
    