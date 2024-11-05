export interface FilterKorisniciRequest {
    ime: string;
    prezime: string;
    korisnickoIme: string;
    status: number;
    id_uloge: number;
}

export interface LoginRequest {
    korisnickoIme: string;
    lozinka: string;
}

export interface RegistracijaRequest {
    ime: string;
    prezime: string;
    korisnickoIme: string;
    lozinka: string;
}

export interface FilterZadatakaRequest {
    naziv: string;
    korisnikId: number;
    korisnickoIme: string;
    idPrioriteta: number;
    datumKreiranja: number;
    idStatusa: number;
}

export interface ZadatakRequest {
    naziv: string;
    korisnikId: number;
    opis: string;
    idPrioriteta: number;
    datumKreiranja: number;
    idStatusa: number;
    dostupnost: number;
}