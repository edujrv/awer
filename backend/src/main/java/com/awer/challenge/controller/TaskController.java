package com.awer.challenge.controller;

import com.awer.challenge.model.Task;
import com.awer.challenge.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public Page<Task> getTasks(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return taskService.getTasks(page, size);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.save(task);
    }
}