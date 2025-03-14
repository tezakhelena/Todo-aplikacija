package com.example.todo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegistracijaRequest {
    private String ime;
    private String prezime;
    private String korisnickoIme;
    private String lozinka;
}
