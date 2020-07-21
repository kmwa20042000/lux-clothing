import React from 'react';
import './App.css';
import Categories from './components/categories/Categories';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';
import SingInAndSignUp from './components/signInAndSignUp/SignInAndSignUp.jsx';
import { Fragment } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  //to make it a close subscription
  //its a function with in firebase
  unsubscribeFromAuth = null;
  componentDidMount() {
    //where it will keep the user logg
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //creating user in the db the fuction
      // if user signs in, this check if there is an exisiting profile
      //if there is, it will simply get back te user ref
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //listen to the userRef to see if there is any changes
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Categories} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={SingInAndSignUp} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
