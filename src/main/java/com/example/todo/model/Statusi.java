package com.example.todo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "statusi")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Statusi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long status_id;
    private String vrijednost;
    private Integer tip_statusa;
}
