import React from "react";
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
        }
    }
    handlerSubmit = event=>{
        event.preventDefault();
        this.setState({email: '', password: ''});
    }
    handlerChange = event=>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlerSubmit}>
                    <input 
                    name="email" 
                    type="email" 
                    onChange={this.handlerChange} 
                    value={this.state.email} 
                    required/>
                    <label>Email</label>

                    <input 
                    name="password" 
                    type="password" 
                    onChange={this.handlerChange} 
                    value={this.state.password} 
                    required/>
                    <label>Password</label>

                    <input  type="submit" value="Submit"/>
                </form>
            </div>

        )
    }
}

export default SignIn;