package com.example.todo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FilterZadatakaRequest {
    private String naziv;
    private String korisnickoIme;
    private Long idPrioriteta;
    private LocalDate datumKreiranja;
    private Long idStatusa;
}
