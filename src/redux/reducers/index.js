import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import homeReducers from './homeReducers'
const rootReducers = combineReducers({
    form: formReducer,
    homeReducers
});
export default rootReducers;    