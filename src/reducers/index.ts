/*
Code based off template from https://github.com/DimitriMikadze/express-react-redux-starter/
*/
import { combineReducers } from 'redux';

import appStateReducer, {appStateReducerState} from './appStateReducer';
import assignmentListReducer, {assignmentListReducerState} from './assignmentListReducer';
import userReducer, {userReducerState} from './userReducer';

const rootReducer = combineReducers({
  appState: appStateReducer,
  assignmentList: assignmentListReducer,
  user: userReducer
});

export interface globalState {appState: appStateReducerState, assignmentList: assignmentListReducerState, user: userReducerState};

export default rootReducer;