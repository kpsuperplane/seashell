import {evolve} from 'ramda';
import {projectRef, fileRef} from '../types';
import assignmentReducer, {assignmentReducerState} from './assignmentReducer';
export interface assignmentListReducerState {
  [key: string]: any;
  assignments: {
    [id : number]: assignmentReducerState
  }
};
export interface assigmmentListReducerAction {type: string, payload: assignmentListReducerState}
export const appStateActions = {
  openProject: 'state_open_project',
  openFile: 'state_open_file'
};
export default function projectReducer(state:assignmentListReducerState  = {assignments:{1:{name: "A1 Racket", id:1},2:{name: "A2 C Functions", id:2}}}, action:assigmmentListReducerAction) {
  switch (action.type) {
    /*case appStateActions.openProject:
      return evolve(state, {project: action.payload.project});
    case appStateActions.openFile:
      return evolve(state, {file: action.payload.file});*/
    default:
      return state;
  }
}