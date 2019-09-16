import React, {Component} from 'react'
import './Components.css'
import { connect } from 'react-redux';
import {AddServer} from '../Actions'

class ServerAdding extends Component{
    constructor(props){
        super(props);
        this.state = {
            server:''
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        this.setState({ server: event.target.value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.AddServer({
          server: this.state.server
        });
        this.setState({ server: "" });

      }
    
    render(){
        return(
            <div className='add-Server'>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.server} onChange={this.handleChange} />
                    <button type="submit">ServerName</button>
                </form>    
            </div>
        )
    }
}

export default connect(null, {AddServer})(ServerAdding)