package com.example.todo.repository;
import com.example.todo.dto.response.PrioritetiList;
import com.example.todo.model.Prioriteti;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PrioritetiRepository extends JpaRepository<Prioriteti, Long> {
    @Query(value = " select " +
            "p.prioritet_id as idPrioritete, " +
            "p.naziv_prioriteta as naziv " +
            "from prioriteti p  ",
            nativeQuery = true)
    List<PrioritetiList> getPrioritetiZadataka();
}
