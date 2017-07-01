import {connect} from 'react-redux';
import {fetchSignUp} from '../../module/users/users.actions';

import SignUp from './SignUp';

const mapStateToProp = (state) => ({isFetching: state.user.isFetching});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSubmitSingUp: data => {
    dispatch(fetchSignUp(data));
  }
});

export default connect(mapStateToProp, mapDispatchToProps)(SignUp);
