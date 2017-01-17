import * as React from 'react';
import {map, actionsInterface} from '../../actions';
import AssignmentList from './AssignmentList';
import {Link} from 'react-router';

const logo = require<any>('./logo.svg');
const styles = require<any>('./index.css');

export interface NavigationProps { title: string; }
export interface NavigationState { visible?: boolean; }

class Navigation extends React.Component<NavigationProps&actionsInterface, NavigationState>{
  render(){
    return (<div className={styles.navigation}>
      <img src={logo} className={styles.logo}/>
      <div className={styles.user}>{this.props.user.questid}</div>
      <Link to="/about" className={styles.linkItem}>About Seashell</Link>
      <AssignmentList />
    </div>);
  } 
}
 
export default map(Navigation);
