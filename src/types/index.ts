export interface Film {
  "id": number,
  "name": string,
  "description": string,
  "duration": string,
  "rating": number,
  "poster": string
  "genre": string
}

interface Actors {
  "name": string,
  "imdb_id": string
}

export interface DetailFilm {
  "id": number,
  "name": string,
  "description": string,
  "duration": string,
  "rating": number,
  "poster": string,
  "genre": string,
  "trivia": string[],
  "actors": Actors[]
}
