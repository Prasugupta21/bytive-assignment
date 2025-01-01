import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => (
  <div className="border p-4 rounded mb-4 shadow">
    <h2 className="text-lg font-bold">{task.title}</h2>
    <p>Description : {task.description || `Task id - ${task.id}` }</p>
    <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
    <Link to={`/edit-task/${task.id}`} className="text-blue-500 underline mt-2 block">
      Edit
    </Link>
  </div>
);

export default TaskCard;
