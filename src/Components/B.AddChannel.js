import React, {Component} from 'react'
import './Components.css'
import { connect } from 'react-redux';
import {AddChannel} from '../Actions'

class ChannelAdding extends Component{
    constructor(props){
        super(props);
        this.state = {
            channel:'',
            id: null
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        this.setState({ channel: event.target.value });
      }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.channel);
        this.props.AddChannel(this.state.id, {
            channel: this.state.channel
        });
        this.setState({ channel: "" });
      }
    addchannel = (id) =>{
        this.setState({
            id: this.props.getServer[1]
        })
        this.handleChange(id)
    }
    
    render(){
        return(
            <div className='add-channel'>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.channel} onChange={this.addchannel} />
                    <button type="submit">ChannelName</button>
                </form>    
            </div>
        )
    }
}
const mapStatetoProps = state =>{
    return{
        getServer: Object.values(state.Channels)
    }
}

export default connect(mapStatetoProps, {AddChannel})(ChannelAdding)