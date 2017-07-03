import {connect} from 'react-redux';

import {fetchLoginRequest} from '../../module/users/users.action';
import LogIn from './LogIn';

const mapStateToProp = (state) => ({isFetching: state.user.isFetching});

const mapDispatchToProps = (dispatch, ownProps) => ({

  handleSubmitLogin: data => {

    dispatch(fetchLoginRequest(data));
  }
});
export default connect(mapStateToProp, mapDispatchToProps)(LogIn);

