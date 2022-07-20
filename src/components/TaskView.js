import React, {useState} from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TaskEditForm from './TaskEditForm';

const TaskView = ({task, updateTask, deleteTask}) => {

  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = (e) => {
    setIsEdit(!isEdit);
  }

  const handleDeleteClick = (e) => {
    deleteTask(task._id);
  }

  const handleSubmit = (updateTaskData) => {
    updateTask(updateTaskData);
    setIsEdit(!isEdit)
  }

  const {taskName, description, materials} = task;

  if (isEdit) {
    return <TaskEditForm task={task} deleteTask={deleteTask} onSubmit={handleSubmit} /> 
  }

  return (
    <tr>
      <td>{taskName}</td>
      <td>{description}</td>
      <td>{materials}</td>
      <td>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
        Delete
      </Button>
      <Button variant="contained" sendIcon={<SendIcon />} onClick={handleEditClick}>
        Edit
      </Button>
      </td>
    </tr>
  )
}

export default TaskView;