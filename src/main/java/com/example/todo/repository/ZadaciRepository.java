package com.example.todo.repository;
import com.example.todo.dto.response.ZadaciList;
import com.example.todo.model.Zadaci;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ZadaciRepository extends JpaRepository<Zadaci, Long>  {
    @Query(value = "select " +
            "z.zadatak_id as zadatakId, " +
            "z.naziv, " +
            "z.opis, " +
            "z.datum_kreiranja as datumKreiranja, " +
            "z.dostupnost, " +
            "z.korisnik_id as korisnikId, " +
            "k.korisnicko_ime as korisnickoIme, " +
            "p.naziv_prioriteta as nazivPrioriteta, " +
            "s.vrijednost as status, " +
            "s.status_id as idStatusa, " +
            "z.prioritet_id as idPrioriteta" +
            "from zadaci z  " +
            "left join korisnici k on z.korisnik_id = k.korisnik_id  " +
            "left join prioriteti p on z.prioritet_id = p.prioritet_id  " +
            "left join statusi s on z.status_id = s.status_id  " +
            "where  " +
            "(CAST(:naziv AS TEXT) IS NULL OR z.naziv = CAST(:naziv AS TEXT)) " +
            "and (CAST(:korisnickoIme AS TEXT) IS NULL OR k.korisnicko_ime = CAST(:korisnickoIme AS TEXT)) " +
            "and (:idPrioriteta IS NULL OR z.prioritet_id = :idPrioriteta) " +
            "and (:idStatusa IS NULL OR z.status_id = :idStatusa) " +
            "and (:datumKreiranja IS NULL OR z.datum_kreiranja >= CAST(:datumKreiranja AS TIMESTAMP)) ",
            nativeQuery = true)
    List<ZadaciList> getAllZadaci(
            @Param("naziv") String naziv,
            @Param("korisnickoIme") String korisnickoIme,
            @Param("idPrioriteta") Long idPrioriteta,
            @Param("datumKreiranja") LocalDate datumKreiranja,
            @Param("idStatusa") Long idStatusa
    );
}
