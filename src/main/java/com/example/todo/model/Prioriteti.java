package com.example.todo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "prioriteti")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Prioriteti {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long prioritet_id;
    private String naziv_prioriteta;
}
