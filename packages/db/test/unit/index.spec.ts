import { Artist, ArtistRepository } from '../../src/index';

describe('Unit tests for "db" package', () => {
    beforeEach(() => {
        ArtistRepository.deleteAll();
    })

    test('adds and finds an artist', () => {
        const artist: Artist = {
            id: '1',
            name: 'Pink Floyd',
            genre: 'Prog rock',
            albums: [
                {
                    title: 'Animals',
                    tracklist: [],
                    year: 1977
                }
            ]
        };

        const expected = artist;

        ArtistRepository.insert(artist);
        const actual = ArtistRepository.findById(artist.id);
        expect(actual).toStrictEqual(expected);
    });

    test('removes an artist', () => {
        const artist: Artist = {
            id: '1',
            name: 'Pink Floyd',
            genre: 'Prog rock',
            albums: [
                {
                    title: 'Animals',
                    tracklist: [],
                    year: 1977
                }
            ]
        };

        const expected: Artist[] = [];

        ArtistRepository.insert(artist);
        ArtistRepository.delete(artist.id);
        const actual = ArtistRepository.findAll();
        expect(actual).toStrictEqual(expected);
    });

    test('finds all artists', () => {
        const artist: Artist = {
            id: '1',
            name: 'Pink Floyd',
            genre: 'Prog rock',
            albums: [
                {
                    title: 'Animals',
                    tracklist: [],
                    year: 1977
                }
            ]
        };

        const expected = [artist];

        ArtistRepository.insert(artist);
        const actual = ArtistRepository.findAll();
        expect(actual).toStrictEqual(expected);
    });

    test('updates an artist', () => {
        const artist: Artist = {
            id: '1',
            name: 'Pink Floyd',
            genre: 'Prog rock',
            albums: [
                {
                    title: 'Animals',
                    tracklist: [],
                    year: 1977
                }
            ]
        };

        const updatedArtist = {
            ...artist,
            genre: 'Progressive rock'
        };

        const expected = updatedArtist;

        ArtistRepository.insert(artist);
        ArtistRepository.update(updatedArtist);
        const actual = ArtistRepository.findById(artist.id);
        expect(actual).toStrictEqual(expected);
    });

    test('tries to add an invalid artist, throws validation error', () => {
        //@ts-ignore
        const artist: Artist = {
            name: 'Pink Floyd',
            genre: 'Prog rock',
            albums: [
                {
                    title: 'Animals',
                    tracklist: [],
                    year: 1977
                }
            ]
        };

        expect(() => ArtistRepository.insert(artist))
            .toThrow('Properties id have invalid values!');
    });
});
