export type TGetMarvelHeroesResponse = {
  attributionHTML: string;
  attributionText: string;
  code: 200;
  copyright: string;
  data: {
    offset: number;
    limit: number;
    total: 1562;
    count: number;
    results: TMarvelSuperHero[];
  };
  etag: string;
  status: 'Ok';
};
export type TMarvelSuperHero = {
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: [];
  };
  description: string;
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: [];
  };
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: [];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: [];
  };
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: {
    type: string;
    url: string;
  }[];
};
export type TMovieDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
};
export type TGetMovieResponse = {
  Search?: TMovieData[];
  Response?: string;
  Error?: string;
};
export type TMovieData = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
export enum ESearchMovieParams {
  search = 's',
  type = 'type',
  apikey = 'apikey',
  hash = 'hash',
  timestamp = 'ts',
  limit = 'limit',
  orderBy = 'orderBy',
  imdbId = 'i',
}
export type THeroData = {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    eyeColor: string;
    hairColor: string;
    height: string[];
    weight: string[];
  };
  biography: {
    fullName: string;
    alterEgos: string;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
    aliases: string[];
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};
