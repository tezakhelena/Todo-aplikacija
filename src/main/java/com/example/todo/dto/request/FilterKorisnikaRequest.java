package com.example.todo.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FilterKorisnikaRequest {
    private String ime;
    private String prezime;
    private String korisnickoIme;
    private Long idStatusa;
    private Long idUloge;
}
