package com.example.todo.service.impl;
import com.example.todo.dto.request.FilterKorisnikaRequest;
import com.example.todo.dto.request.RegistracijaRequest;
import com.example.todo.dto.response.KorisniciList;
import com.example.todo.model.Korisnici;
import com.example.todo.repository.KorisniciRepository;
import com.example.todo.service.KorisniciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisniciServiceImpl implements KorisniciService {

    @Autowired
    KorisniciRepository korisniciRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public List<KorisniciList> dohvatiKorisnike(FilterKorisnikaRequest request){
        return korisniciRepository.getAllKorisnici(
                request.getIme(),
                request.getPrezime(),
                request.getKorisnickoIme(),
                request.getIdStatusa(),
                request.getIdUloge()
        );
    }

    public String registracija(RegistracijaRequest request) {
        String encodedPassword = passwordEncoder.encode(request.getLozinka());
        Korisnici korisnici = new Korisnici();

        korisnici.setIme(request.getIme());
        korisnici.setPrezime(request.getPrezime());
        korisnici.setKorisnickoIme(request.getKorisnickoIme());
        korisnici.setUloga_id(2L);
        korisnici.setStatus_id(9L);
        korisnici.setLozinka(encodedPassword);

        korisniciRepository.saveAndFlush(korisnici);

        return "Uspješna registracija";
    }

}
