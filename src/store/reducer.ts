import { combineReducers } from 'redux';
import weatherReducer from './weatherSlice';
import astronomyReducer from './astronomySlice';
import cityReducer from './citySlice';

const rootReducer = combineReducers({
  weather: weatherReducer,
  astronomy: astronomyReducer,
  city: cityReducer,
});

export default rootReducer;
