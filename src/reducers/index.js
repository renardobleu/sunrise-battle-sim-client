import { combineReducers } from 'redux'

import adventuresReducer from './adventures';
import simReducer from './sim';

const rootReducer = combineReducers({
  adventuresReducer,
  simReducer,
});

export default rootReducer;
