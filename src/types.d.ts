export interface DetailedCardPropType {
  _id: string;
  title: string;
  ranking: number;
  genres: Array<string>;
  episodes: number;
  image: string;
  link: string;
  synopsis: string;
  thumb: string;
  type: string;
  status: string;
}

export interface CardPropType{
  _id:string,
  title:string,
  episodes:number,
  image:string,
  type:string
}