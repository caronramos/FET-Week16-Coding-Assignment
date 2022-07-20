import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CreateTask = (props) => {
  const [taskNameValue, setTaskNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [materialsValue, setMaterialsValue] = useState("");
  
  const handleTaskNameChange = e => setTaskNameValue(e.target.value);
  const handleDescriptionChange = e => setDescriptionValue(e.target.value);
  const handleMaterialsChange = e => setMaterialsValue(e.target.value);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const createTaskData = {
      taskName: taskNameValue,
      description: descriptionValue,
      materials: materialsValue
    }
    props.createTask(createTaskData);
    setTaskNameValue("")
    setDescriptionValue("")
    setMaterialsValue("")
  }

  return (
    <div className="createTask">
      <br></br>
      <h2>Enter New Task</h2>
      <Form>
        <Form.Group controlId="taskTaskName">
          <Form.Label>Enter Task Name:</Form.Label>
          <Form.Control value={taskNameValue} onChange={handleTaskNameChange} placeholder="Task Name" />
        </Form.Group>
        <Form.Group controlId="taskDescription">
          <Form.Label>Enter Description:</Form.Label>
          <Form.Control value={descriptionValue} onChange={handleDescriptionChange} placeholder="Description" />
        </Form.Group>
        <Form.Group controlId="taskMaterials">
          <Form.Label>Enter Materials:</Form.Label>
          <Form.Control value={materialsValue} onChange={handleMaterialsChange} placeholder="Materials" />
        </Form.Group>
        { }
        <br></br>
        <Link to={`/list`}>
        <Button onClick={handleTaskSubmit} variant="contained" sendIcon={<SendIcon />}>Add Task</Button>
        </Link>
      </Form>
    </div>
  )
}

export default CreateTask;