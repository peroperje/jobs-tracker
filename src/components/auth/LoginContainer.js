import {connect} from 'react-redux';

import LogIn from './LogIn';


const mapDispatchToProps = (dispatch, ownProps) => ({

  handleSubmitLogin: data => {

    console.log('this is login data', data);
  }
});
export default connect(null, mapDispatchToProps)(LogIn);

