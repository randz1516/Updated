import React, {Component} from 'react'
import {ViewChannels} from '../Actions'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import './Components.css'

class ListofChannels extends Component{
    componentDidMount(){
        console.log(this.props.viewChannels)
    }
    

    renderList(){
        return this.props.viewChannels.map((channel, i) => {
            return(
                <ListItem key={i} button>
                    <ListItemText primary={channel.channel}/>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        viewChannels: Object.values(state.Channels.channel)
    }
}
export default connect(mapStateToProps, {ViewChannels})(ListofChannels)