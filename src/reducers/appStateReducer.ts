import {evolve} from 'ramda';
import {projectRef, fileRef} from '../types';
export interface appStateReducerState {[key: string]: any; assignment?:projectRef, file?: fileRef};
export interface appStateReducerAction {type: string, payload: appStateReducerState}
export const appStateActions = {
  openAssignment: 'state_open_project',
  openFile: 'state_open_file'
};
export default function appStateReducer(state:appStateReducerState = {file: "hello world"}, action:appStateReducerAction) {
  switch (action.type) {
    case appStateActions.openAssignment:
      return evolve(state, {project: action.payload.assignment});
    case appStateActions.openFile:
      return evolve(state, {file: action.payload.file});
    default:
      return state;
  }
}