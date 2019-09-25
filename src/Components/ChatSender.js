import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Components.css';
import { connect } from 'react-redux';
import { AddMessage } from '../Actions'


class ChatSender extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
            id: null
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({message: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.message);
        this.props.AddMessage(this.state.id, {
            message: this.state.message
        });
        this.setState({ message: ""})
    }
    addmessage = (id) => {
        this.setState({
            id: this.props.getChannel[1]
        })
        this.handleChange(id)
    }

    render(){
        return(
            <div className='send-chat' >
                <form className='chat-box' onSubmit={this.handleSubmit}>
                    <TextField
                        id="standard-name"
                        label="Message"
                        className='chat-field'
                        margin="normal"
                        value={this.state.message}
                        onChange={this.addmessage}
                    />
                    <Button variant="contained" color="primary" className='btn-send'>
                        send
                    </Button>
                </form>
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return{
        getChannel: Object.values(state.Messages)
    }
}

export default connect(mapStatetoProps, {AddMessage})(ChatSender)