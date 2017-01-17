import * as React from 'react';
import {map, actionsInterface} from '../actions';

export interface HomeProps { title: string; }
export interface HomeState { open?: boolean; title?: string; }

class Home extends React.Component<HomeProps&actionsInterface, HomeState>{
  render(){
    return (<h1 onClick={this.props.dispatch.appState.openFile.bind(this, "test")}>{this.props.appState.file}</h1>);
  }
}
 
export default map(Home);
