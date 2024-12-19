package com.awer.challenge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import com.awer.challenge.model.Task;

@Repository
public interface TaskRepository extends PagingAndSortingRepository<Task, Long>, JpaRepository<Task, Long> {
}
