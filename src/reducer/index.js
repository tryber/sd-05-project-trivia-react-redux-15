import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import TokenReducer from './tokenReducer';

const rootReducer = combineReducers({
  questionsReducer,
  TokenReducer,
});

export default rootReducer;
