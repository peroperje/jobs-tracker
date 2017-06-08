import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {jobs, jobsVisibilityFilter} from './../module/jobs/jobs.reducer';


const reducers = combineReducers({
  jobs,
  jobsVisibilityFilter,
  form: formReducer
});
export default reducers;
