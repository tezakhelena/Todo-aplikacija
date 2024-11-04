package com.example.todo.dto.response;

public class PrioritetiList {
    private Long idPrioriteta;
    private String naziv;

    public PrioritetiList(Long idPrioriteta, String naziv){
        this.idPrioriteta = idPrioriteta;
        this.naziv = naziv;
    }
}
