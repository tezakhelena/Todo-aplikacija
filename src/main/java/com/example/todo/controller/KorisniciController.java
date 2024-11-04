package com.example.todo.controller;
import com.example.todo.config.JWTUtil;
import com.example.todo.dto.request.FilterKorisnikaRequest;
import com.example.todo.dto.request.LoginRequest;
import com.example.todo.dto.request.RegistracijaRequest;
import com.example.todo.dto.response.KorisniciList;
import com.example.todo.dto.response.LoginResponse;
import com.example.todo.service.KorisniciService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/korisnici")
@CrossOrigin
public class KorisniciController {
    @Autowired
    KorisniciService korisniciService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping
    public List<KorisniciList> dohvatiKorisnike(@RequestBody FilterKorisnikaRequest request){
        return korisniciService.dohvatiKorisnike(request);
    }

    @PostMapping("/registracija")
    public String registracija(@RequestBody RegistracijaRequest request) {
        System.out.println(request.getLozinka());
        return korisniciService.registracija(request);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        try {
            // Authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getKorisnickoIme(), request.getLozinka())
            );

            // If successful, generate a JWT token
            String token = jwtUtil.generateToken(request.getKorisnickoIme()); // Assuming jwtUtil is defined
            LoginResponse loginResponse = new LoginResponse(token, request.getKorisnickoIme());
            return ResponseEntity.ok(loginResponse);
        } catch (Exception e) {
            return ResponseEntity.status(401).body(null);
        }
    }


}
