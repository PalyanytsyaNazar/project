"use sctrict";
const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один з останіх переглянутих фільмів?', ''),
    b = prompt('На скільки оціните його?', ''),
    c = prompt('Один з останіх переглянутих фільмів?', ''),
    d = prompt('На скільки оціните його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
    
    