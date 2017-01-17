import * as React from 'react';
import {map, actionsInterface} from '../../actions';
import { Link } from 'react-router';

const styles = require<any>('./AssignmentList.css');
const indexStyles = require<any>('./index.css');

export interface AssignmentListProps { title: string; }
export interface AssignmentListState { visible?: boolean; }

class AssignmentList extends React.Component<AssignmentListProps&actionsInterface, AssignmentListState>{
  render(){
      console.log(this);
    return (<nav>
      <h3 className={indexStyles.listTitle}>MY ASSIGNMENTS</h3>
      {Object.keys(this.props.assignmentList.assignments).map((id)=>(
        <Link to={'/assignment/'+id} className={indexStyles.linkItem} key={id}>{this.props.assignmentList.assignments[Number(id)].name}</Link>
      ))}
    </nav>);
  }
}
 
export default map(AssignmentList);
