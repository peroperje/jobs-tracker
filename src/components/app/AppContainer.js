import {connect} from 'react-redux';
import jwtStorage from '../../store/jwtStorage';

//component
import {checkIsLoggedRequest,logOut} from '../../module/users/users.action';
import App from './App';


const mapStateToProps = (state) => {
  let isLogged = false;
  let shouldCheckIsLogged = false;
  let errorMessage = false
  if (state.user._id && jwtStorage.exists()) {
    isLogged = true;
  }
  if (!state.user._id && jwtStorage.exists()) {
    shouldCheckIsLogged = true;
  }
  if (state.user.errorFetching) {
    errorMessage = state.user.errorFetching;
  }
  return {isLogged, shouldCheckIsLogged, errorMessage};
};

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLoggedRequest());
  },
  logOut: () => {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
