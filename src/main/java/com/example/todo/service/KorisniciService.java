package com.example.todo.service;

import com.example.todo.dto.request.FilterKorisnikaRequest;
import com.example.todo.dto.request.RegistracijaRequest;
import com.example.todo.dto.response.KorisniciList;

import java.util.List;

public interface KorisniciService {
    List<KorisniciList> dohvatiKorisnike(FilterKorisnikaRequest request);
    String registracija(RegistracijaRequest request);
}
