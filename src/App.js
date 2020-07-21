import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';
import Categories from './components/categories/Categories';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SingInAndSignUp from './components/signInAndSignUp/SignInAndSignUp.jsx';
import { Fragment } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  //to make it a close subscription
  //its a function with in firebase
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    //where it will keep the user logg
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //creating user in the db the fuction
      // if user signs in, this check if there is an exisiting profile
      //if there is, it will simply get back te user ref
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //listen to the userRef to see if there is any changes
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Categories} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SingInAndSignUp} />
        </Switch>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
//null because App.js doesnt any state, here only sets the state
export default connect(null, mapDispatchToProps)(App);
