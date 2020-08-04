import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import AuthTypes from './authTypes';
//login a user

//load a user

//register a user
const actRegister = async (formData) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(formData);
    dispatch({ type: AuthTypes.LOGIN_SUCCESS });
  } catch (error) {}
};
