export interface CardResult {
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
  color_identity: string[],
  rulings_uri: URL,
  power: number,
  toughness: number,
  loyalty: number,
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