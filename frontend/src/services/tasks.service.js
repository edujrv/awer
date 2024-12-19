import { httpClient } from './share';

class TasksService {
    async getTasks (page, pageSize) {
        const response = await httpClient.get('/tasks',
            {
                params: {
                    page,
                    size: pageSize
                }
            });
        return response.data;
    }

    async saveTask (task) {
        const response = await httpClient.post('/tasks', task);
        return response.data;
    }
}

export default new TasksService();
