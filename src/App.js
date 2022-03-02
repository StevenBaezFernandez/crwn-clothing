import React from 'react';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            currentUser:{id : snapShot.id, ...snapShot.data()}
          });
        });
      }
      setCurrentUser(userAuth);
    })

    console.log(`Here -> ${this.props.currentUser}`);
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>       
          <Route path='/shop' element={<ShopPage/>}/>      
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
          <Route path="signIn" element={this.props.currentUser ? (<Navigate replace to="/" />) : (<SignInAndSignUpPage />)}/>      
                
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  setCurrentUser: user.currentUser
})

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispathToProps
)(App);
