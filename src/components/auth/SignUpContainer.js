import {connect} from 'react-redux';
import {signup} from '../../module/users/users.service'

import SignUp from './SignUp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmitSingUp: data => {
    console.log('Submitted SingUp form', data);
    signup(data).then(res=>console.log(res));
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
