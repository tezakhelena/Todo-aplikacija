package com.example.todo.repository;
import com.example.todo.dto.response.StatusiList;
import com.example.todo.model.Statusi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StatusiRepository extends JpaRepository<Statusi, Long> {
    @Query(value = " select " +
            "s.status_id as idStatusa, " +
            "s.vrijednost as naziv, " +
            "s.tip_statusa as tipStatusa  " +
            "from statusi s  " +
            "where (:tipStatusa IS NULL OR s.tip_statusa = :tipStatusa)  ",
            nativeQuery = true)
    List<StatusiList> getStatusiPoTipuStatusa(@Param("tipStatusa") Integer tipStatusa);
}
