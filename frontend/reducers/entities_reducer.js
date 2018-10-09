import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export const entitiesReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});
