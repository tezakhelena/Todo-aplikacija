export interface Korisnik {
  id: number;
  ime: string;
  prezime: string;
  datumRodjenja: string;
  email: string;
  status: boolean; //true ako je korisnik aktivan, false ako je blokiran
}

export interface Zadatak{
    zadatakId: number;
    naziv: string;
    opis: string;
    datumKreiranja: number;
    korisnikId: number;
    korisnickoIme: string;
    nazivPrioriteta: string;
    idPrioriteta: string;
    dostupnost: number;
    status: string;
    idStatusa: number;
}

export interface SelectOption { //za filtere sa select poljem
  label: string | number;
  value: string | number;
}
