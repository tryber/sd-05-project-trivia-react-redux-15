import { combineReducers } from 'redux';
import reducer from './reducer';
import questionsReducer from './questionsReducer'

const rootReducer = combineReducers({
  reducer,
  questionsReducer,
});

export default rootReducer;
