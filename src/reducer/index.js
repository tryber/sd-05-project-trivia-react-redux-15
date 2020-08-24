import { combineReducers } from 'redux';
import reducer from './reducer';
import questionsReducer from './questionsReducer';
import TokenReducer from './tokenReducer';

const rootReducer = combineReducers({
  reducer,
  questionsReducer,
  TokenReducer,
});

export default rootReducer;
