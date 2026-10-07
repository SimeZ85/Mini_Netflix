// Datei movie.service.ts im Ordner models erstellen
// Movie-Klasse importieren
// MovieService Klasse anlegen
// Internes Lager erstellen z.B. movies (Welcher Typ)
// Film hinzufügen Methode erstellen
// Alle Filme abrufen Methode erstellen.
// Erweitern mit Such-Funktion

import { Movie } from "./Movie";

// TODO: Erstelle eine Klasse MovieService
export class MovieService {

    // TODO: Internes Lager erstellen:
    private movies: Movie[] = []; // mit nachschauen in einem anderen Projekt

    // TODO: Film hinzufügen Methode
    public addMovie(movie: Movie): void {
        this.movies.push(movie); // mit nachschauen in einem anderen Projekt
    }

    // TODO: Alle Filme abrufen Methode
    public getAllMovies(): Movie[] {
        return this.movies;
    }

    // TODO: Suche mit ID Funktion
    public findMovieById(id: string): Movie | undefined {
        return this.movies.find((movie) => movie.getId() === id);
    }


}