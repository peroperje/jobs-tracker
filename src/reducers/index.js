import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {jobs, jobsVisibilityFilter} from './../module/jobs/jobs.reducer';
import {user} from '../module/users/users.reducer';


const reducers = combineReducers({
  jobs,
  jobsVisibilityFilter,
  user,
  form: formReducer
});
export default reducers;
