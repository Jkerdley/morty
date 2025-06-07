type character = Record<number, string>;
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
  characters: character[];
  url: string;
}
