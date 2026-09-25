//Es wird erwartet, eine Klasse zu erstellen, die ein Objekt erzeugen kann,
//das einen Film darstellt. In dieser Klasse sollen enthalten sein:
//ID, Titel, Erscheinungsjahr, Dauer in Minuten, Genres (mehrere Einträge möglich)
//Gesehen-Status(Ja/Nein), Optionale Bewertung

export class Movie {

    private id: string;
    private title: string;
    private published: number;
    private length: number;
    private genre: string[] = [];
    private seen: boolean = false;
    private rating?: number;

    constructor(
        id: string,
        title: string,
        published: number,
        length: number,
        genre: string[],
        //seen: boolean,
    ) {
        this.id = id;
        this.title = title;
        this.published = published;
        this.length = length;
        this.genre = genre;
        //this.seen = seen;
    }

    //Methode zum Wiedergeben von zusammenhängenden Text aus Filminfos
    public getInfo(): void {
        return console.log(`Dieser Film heißt ${this.title} dauert ${this.length}
        und stammt aus dem Jahr: ${this.published}`)
    }
}