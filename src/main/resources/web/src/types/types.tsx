export interface Korisnik {
    id: number;
    ime: string;
    prezime: string;
    datumRodjenja: string;
    email: string;
    status: boolean; //true ako je korisnik aktivan, false ako je blokiran
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