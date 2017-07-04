import {connect} from 'react-redux';
import jwtStorage from '../../store/jwtStorage';

//component
import App from './App';
import {me} from '../../module/users/users.service';

const mapStateToProps = (state) => {
  let isLogged = false;
  let shouldCheckIsLogged = false;
  if (state.user._id && jwtStorage.exists()) {
    isLogged = true;
  }
  if (!state.user._id && jwtStorage.exists()) {
    shouldCheckIsLogged = true;
  }
  return {isLogged, shouldCheckIsLogged};
};

const mapDispatchToProps = () => ({
  checkIsLogged: () => {
    //TODO dispatch action
    console.log('poziva da vidi da li je logovan');
    me()
      .then(res=>console.log('res me',res))
      .catch(e=>console.log('error me ',e))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
