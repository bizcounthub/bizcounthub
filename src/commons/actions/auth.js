import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  USER_SIGNOUT,
} from 'app/common/constants/action-types';
import { loadUser, removeSession } from 'app/common/helpers/auth';

export const loadAuth = () => dispatch => {
  dispatch({
    type: USER_REQUEST,
  });

  return loadUser()
    .then(user =>
      dispatch({
        type: USER_SUCCESS,
        user,
      })
    )
    .catch(err => {
      dispatch({
        type: USER_FAILURE,
        error: err,
      });
    });
};

// remove sessionStorage
export const signOut = () => {
  removeSession();
  return {
    type: USER_SIGNOUT,
  };
};
