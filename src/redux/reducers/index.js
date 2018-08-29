import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import homeReducers from './homeReducers'
import architectureReducers from './architectureReducers';
import bhuddartsReducers from './bhuddartsReducers';
import blueprintReducers from './blueprintReducers';
import decorativepatternReducers from './decorativepatternReducers';
import festivalReducers from './fesitvalReducers'
import festivaltemporaryReducers from './festivaltemporaryReducers'
import galaxyReducers from './galaxyReducers'
import historyReducers from './historyReducers';
import legendReducers from './legendReducers';
import paintingReducers from './paintingReducers';
import sillaReducers from './sillaReducers'
import sculptureReducers from './sculptureReducers'
import surveyReducers from './surveyReducers'



const rootReducers = combineReducers({
    form: formReducer,
    homeReducers,
    architectureReducers,
    bhuddartsReducers,
    blueprintReducers,
    sculptureReducers,
    decorativepatternReducers,
    festivalReducers,
    festivaltemporaryReducers,
    galaxyReducers,
    historyReducers,
    legendReducers,
    paintingReducers,
    sillaReducers,
    surveyReducers
});
export default rootReducers;    