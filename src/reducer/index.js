import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
  questionsReducer,
  tokenReducer,
});

export default rootReducer;
