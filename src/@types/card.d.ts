import { ColorInterface } from "./colors";

export interface CardResult {
  flavor_text: any;
  scryfall_uri: string | undefined;
  id: string,
  name: string,
  lang: string,
  artist: string,
  image_uris: {
    large: string,
    art_crop: string,
  },
  mana_cost: string,
  cmc: number,
  type_line: string,
  color_identity: {
    colors: string,
  },
  rulings_uri: URL,
  power: number,
  toughness: number,
  loyalty: number,
  oracle_text: string,
  card_faces: [CardFace],
}

export interface CardFace {
  artist: string,
  oracle_text: string,
  mana_cost: string,
  flavor_text: string,
  power: number,
  toughness: number,
  loyalty: number,
  image_uris: {
    large: string,
    art_crop: string,
  },
}
export interface CardFaceMap {
  map: (value: CardFace, index: number) => JSX.Element;
  value: CardFace;
}


export interface CardRuleData {
  comment: string,
  published_at: string,
}
export interface CardForm {
  result: CardResult,
  rules: CardRuleData[]
}
export interface CardRules {
  map: (rule: CardRuleData, index: number) => JSX.Element;
  length: number;
  data: CardRuleData[];
}
