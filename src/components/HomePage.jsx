import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/tasksSlice';
import EditTaskPage from './EditTaskPage';

const HomePage = () => {
  const dispatch = useDispatch();
  const { apiTasks, addedTasks, status, error } = useSelector((state) => state.tasks);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [dispatch, status]);

  const handleEdit = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  const displayedTasks = [...useSelector((state) => state.tasks.addedTasks), ...useSelector((state) => state.tasks.apiTasks)];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Task Management</h1>
      {status === 'loading' && <p>Loading tasks...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {status === 'succeeded' && (
        <div className="space-y-4">
          {displayedTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
            >
              <div>
                <h2 className="font-semibold text-lg">{task.title}</h2>
                <p className="text-gray-600">{task.description || 'No description'}</p>
                <span
                  className={`text-sm font-medium ${
                    task.completed ? 'text-green-500' : 'text-yellow-500'
                  }`}
                >
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleEdit(task)}
              >
                ✏️ Edit
              </button>
            </div>
          ))}
        </div>
      )}
      {isEditing && (
        <EditTaskPage
          task={currentTask}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
