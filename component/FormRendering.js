//Form rendering using event handling
import React, { Component } from 'react'

export default class FormRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             password:""
        }
    }
    
    changeUserName=(event)=>{
        this.setState({
            uname:event.target.value
        })
       
    }
    changePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${this.state.uname} ${this.state.password}`)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitUserData} method='get'>
                    <input type="text" value={this.state.uname} 
                    onChange={this.changeUserName}/>
                    <br></br>
                    <input type="text" value={this.state.password}
                    onChange={this.changePassword}/>
                    <br></br>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
