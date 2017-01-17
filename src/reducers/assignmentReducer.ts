import {evolve} from 'ramda';
import {projectRef, fileRef} from '../types';
export interface assignmentReducerState {[key: string]: any; 
    name?: string;
    id?: number;
};
export interface assignmentReducerAction {type: string, payload: assignmentReducerState}
export const appStateActions = {
  changeName: 'assignment_change_name',
};
export default function assignmentReducer(state:assignmentReducerState = {name: "New Assignment", id:-1}, action:assignmentReducerAction={type:null, payload:{}}) {
  switch (action.type) {
    case appStateActions.changeName:
      return evolve(state, {project: action.payload.name});
    default:
      return state;
  }
}