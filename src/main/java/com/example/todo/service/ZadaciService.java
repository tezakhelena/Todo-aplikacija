package com.example.todo.service;
import com.example.todo.dto.request.FilterZadatakaRequest;
import com.example.todo.dto.response.ZadaciList;

import java.util.List;

public interface ZadaciService {
    List<ZadaciList> dohvatiZadatke(FilterZadatakaRequest request);
}
