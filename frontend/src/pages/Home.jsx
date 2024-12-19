import { useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import useFetchTasks from '../hooks/useFetchTasks';
import usePagination from '../hooks/usePagination';

const Home = () => {
  const { page, handlePageChange } = usePagination(0);
  const { tasks, totalPages, fetchTasks } = useFetchTasks(page, 5);

  const handleTaskAdded = () => {
    fetchTasks();
  };
  useEffect(() => {
        fetchTasks();
      }, [page, fetchTasks]);

  return (
    <div className="min-h-screen flex items-center justify-center w-full text-center space-y-4 p-4">
      <div className="w-full max-w-screen-md px-4">
        <h1 className="text-4xl font-bold pb-4">Lista de Tareas</h1>
        <TaskForm onTaskAdded={handleTaskAdded} />
        <TaskList tasks={tasks} />
        
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => handlePageChange(page - 1)} 
            disabled={page === 0}
            className="px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            Anterior
          </button>
          <span>Página {page + 1} de {totalPages}</span>
          <button 
            onClick={() => handlePageChange(page + 1)} 
            disabled={page === totalPages - 1}
            className="px-4 py-2 ml-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

