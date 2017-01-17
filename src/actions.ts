import { connect } from 'react-redux';
import { ComponentClass } from 'react';
import { globalState } from './reducers/';
import {projectRef, fileRef} from './types';
import {appStateActions} from './reducers/appStateReducer';

interface Func<T> {  
    ([...args]: any): T;
}

function returnType<T>(func: Func<T>) {  
    return null as T;
}

const mapStoreToProps = (state:globalState) => state;

const mapDispatchToProps = (dispatch:Function) => {
    return {
        dispatch: {
            appState: {
                openFile: (fileName: fileRef) => dispatch({type: appStateActions.openFile, payload: {file: fileName}}),
                openAssignment: (projectName: projectRef) => dispatch({type: appStateActions.openAssignment, payload: {project: projectName}})
            }
        }
    }
}; 

const actionsStoreType = returnType(mapDispatchToProps);
export type actionsInterface = typeof actionsStoreType & globalState;

export function map(Component:ComponentClass<any>){
    return connect(mapStoreToProps,mapDispatchToProps)(Component);
}  