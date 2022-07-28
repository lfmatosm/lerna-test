export type Album = {
    title: string;
    tracklist: string[];
    year: number;
};

/**
 * Defines an Artist
 */
export type Artist = {
    id: string;
    name: string;
    genre: string;
    albums: Album[];
};

const REQUIRED_ARTIST_PROPERTIES = ['id', 'name', 'genre', 'albums'];

interface Lengthwise {
    length: number;
};

let artists: Artist[] = [];

/**
 * Defines a memory database {@linkcode Artist} items
 */
export class ArtistRepository {
    private static validateProperty(artist: Map<string, Lengthwise>, key: string): string | null {
        const value = artist.get(key);
        return !value || !value.length ? key : null;
    }

    /**
     * Validates an Artist. Throws an error if any of its required properties are not set or empty
     * @param artist Artist to be validated
     * @returns void if no errors were found and never if an error is thrown
     */
    private static validate(artist: Artist): void | never {
        const artistMap = new Map(Object.entries(artist));
        const errors = REQUIRED_ARTIST_PROPERTIES
            .map(key => ArtistRepository.validateProperty(artistMap, key))
            .filter(Boolean);
        
        if (!errors.length) return;
        throw new Error(`Properties ${errors.join(",")} have invalid values!`)
    }

    /**
     * Inserts an Artist
     * @param artist Artist to be inserted
     */
    static insert(artist: Artist): void | never {
        ArtistRepository.validate(artist);
        const dbArtist = ArtistRepository.findById(artist.id);
        if (Boolean(dbArtist)) throw new Error("Artist already exists!");
        artists.push(artist);
    }

    /**
     * Updates an Artist by replacement
     * @param artist Artist to be updated
     */
     static update(artist: Artist): void | never {
        ArtistRepository.validate(artist);
        const artistIndex = artists.findIndex(dbArtist => dbArtist.id === artist.id);
        if (artistIndex < 0) throw new Error("Artist doesn't exists!");
        artists.splice(artistIndex, 1, artist);
    }

    /**
     * Removes an Artist
     * @param id The id of the Artist to be removed
     */
    static delete(id: string): void | never {
        const artistIndex = artists.findIndex(artist => artist.id === id);
        if (artistIndex < 0) throw new Error("Artist doesn't exists!");
        artists.splice(artistIndex, 1);
    }

    /**
     * Finds an Artist by its id
     * @param id The id of the Artist to find 
     * @returns the Artist found or undefined if it doesn't exists
     */
    static findById(id: string): Artist | undefined {
        return artists.find(artist => artist.id === id);
    }

    /**
     * Finds all Artists
     * @returns an array of Artists
     */
    static findAll(): Artist[] {
        return artists;
    }

    /**
     * Removes all Artists
     */
    static deleteAll(): void {
        artists = [];
    }
}
