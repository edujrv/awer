package com.awer.challenge.service;

import com.awer.challenge.model.Task;
import com.awer.challenge.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Page<Task> getTasks(int page, int size) {
        return taskRepository.findAll(PageRequest.of(page, size));
    }

    public Task save(Task task) {
        return taskRepository.save(task);
    }
}
