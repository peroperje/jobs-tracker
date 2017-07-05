import {connect} from 'react-redux';

//selectors
import {
  isLogged,
  shouldCheckIsLogged,
  errorFetchingUser
} from '../../module/users/users.selector';

// component
import {checkIsLoggedRequest, logOut} from '../../module/users/users.action';
import App from './App';


const mapStateToProps = (state) => ({
  isLogged: isLogged(state),
  shouldCheckIsLogged: shouldCheckIsLogged(state),
  errorMessage: errorFetchingUser(state)
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkIsLoggedRequest());
  },
  logOut: () => {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
