package com.example.todo.controller;
import com.example.todo.dto.request.FilterZadatakaRequest;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.service.ZadaciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/zadaci")
@CrossOrigin
public class ZadaciController {
    @Autowired
    ZadaciService zadaciService;

    @PostMapping
    public List<ZadaciList> dohvatiZadatke(@RequestBody FilterZadatakaRequest request){
        return zadaciService.dohvatiZadatke(request);
    }
}
