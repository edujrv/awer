import { useState } from 'react';
import PropTypes from 'prop-types';
import tasksService from '../services/tasks.service';

const TaskForm = ({ onTaskAdded }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (description) {
      const task = await tasksService.saveTask({ description });
      onTaskAdded(task);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg shadow-md">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Nueva tarea"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Agregar
      </button>
    </form>
  );
};
TaskForm.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};

export default TaskForm;
