import React, { Component } from 'react'
import '../States.css'

export default class StateinClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Divya",
             count:0
        }
    }
    
    render() {
        setTimeout(() =>{
            this.setState({
                name:"Divya T",
                
            })
        },1000)
        return (
            <div className='demo'>
                <h1>welcome {this.state.name}
                </h1>
                <h1>
                    count:{this.state.count}
                </h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                    
                }}>Increment button</button>
                
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                    
                }}>Decrement button</button>
              
                <button onClick={()=>{
                    this.setState({
                        count:0
                    })
                    
                }}>Reset</button>
            </div>
        )
    }
}
