import {connect} from 'react-redux';

import SignUp from './SignUp';

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmitSingUp: data => {
    console.log('Submitted SingUp form', data);
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
