package com.example.todo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "zadaci")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Zadaci {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long zadatak_id;
    private String naziv;
    private String opis;
    private LocalDate datum_kreiranja;
    private Long korisnik_id;
    private Long prioritet_id;
    private Integer dostupnost;
    private Long status_id;
}
