import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
const navigate=useNavigate();
  const handleAddTask = () => {
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTitle('');
      setDescription('');
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border rounded px-3 py-2"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskPage;
