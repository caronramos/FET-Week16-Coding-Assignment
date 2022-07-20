import React from 'react';
import Table from 'react-bootstrap/Table';
import TaskView from './TaskView';

const TaskTable = (props) => {
 return (
   <Table className="table table-hover" striped bordered hover>
    <thead>
      <tr>
        <th>Task Name</th>
        <th>Description</th>
        <th>Materials</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks.map(task => {
          return (
            <TaskView task={task} updateTask={props.updateTask} deleteTask={props.deleteTask} />
          )
        })
      }
    </tbody>
  </Table>
 )
}

export default TaskTable;