package com.example.todo.service.impl;
import com.example.todo.dto.request.FilterZadatakaRequest;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.repository.ZadaciRepository;
import com.example.todo.service.ZadaciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZadaciServiceImpl implements ZadaciService {
    @Autowired
    ZadaciRepository zadaciRepository;

    public List<ZadaciList> dohvatiZadatke(FilterZadatakaRequest request){
        return zadaciRepository.getAllZadaci(
                request.getNaziv(),
                request.getKorisnickoIme(),
                request.getIdPrioriteta(),
                request.getDatumKreiranja(),
                request.getIdStatusa()
        );
    }
}
