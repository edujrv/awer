import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => (
  <ul className="list-disc pl-5 space-y-2 pt-4">
    {tasks.map((task) => (
      <li key={task.id} className="bg-gray-600 p-2 rounded shadow">
        {task.description}
      </li>
    ))}
  </ul>
);
  
  TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  export default TaskList;
  