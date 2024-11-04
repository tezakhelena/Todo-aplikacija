package com.example.todo.dto.response;

public class StatusiList {
    private Long idStatusa;
    private String naziv;
    private Integer tipStatusa;

    public StatusiList(Long idStatusa, String naziv, Integer tipStatusa){
        this.idStatusa = idStatusa;
        this.naziv = naziv;
        this.tipStatusa = tipStatusa;
    }
}
