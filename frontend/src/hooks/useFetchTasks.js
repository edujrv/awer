import { useCallback, useState } from 'react';
import tasksService from '../services/tasks.service';

const useFetchTasks = (page, pageSize) => {
  const [tasks, setTasks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchTasks = useCallback(async () => {
    try {
      const data = await tasksService.getTasks(page, pageSize);
      setTasks(data.content);
      setTotalPages(data.page.totalPages);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  }, [page, pageSize]);

  return { tasks, totalPages, fetchTasks };
};

export default useFetchTasks;
