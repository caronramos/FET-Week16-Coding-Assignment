import React, {useState} from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function TaskEditForm({task, deleteTask, onSubmit }) {
  
  const [formData, setFormData] = useState(task);

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  }

  const handleDeleteClick = (e) => {
    deleteTask(task._id);
  }

  return (
    <tr>
      <td>
        <input type="text" name="taskName" value={formData.taskName} onChange={handleChange} />
      </td>
      <td>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </td>
      <td>
        <input type="text" name="materials" value={formData.materials} onChange={handleChange} />
      </td>
      <td>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClick}>
        Delete
      </Button>
      <Button variant="contained" sendIcon={<SendIcon />} onClick={ () => onSubmit(formData)}>
        Submit
      </Button>
      </td>
    </tr>
  )
}