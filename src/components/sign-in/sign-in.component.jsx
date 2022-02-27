import React from "react";
import {signInWithGoogle} from '../../firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
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
                    <FormInput 
                    name="email" 
                    type="email" 
                    handlerChange={this.handlerChange} 
                    value={this.state.email} 
                    label="Email"
                    required/>

                    <FormInput 
                    name="password" 
                    type="password" 
                    handlerChange={this.handlerChange} 
                    value={this.state.password} 
                    label="Password"
                    required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>

        )
    }
}

export default SignIn;