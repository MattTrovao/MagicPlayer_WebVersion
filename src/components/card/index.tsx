import { useState } from 'react';

import { Container } from "../global/Container";
import {
  NoRule,
  ResultBox,
  ResultImg,
  RuleList,
  RuleText,
  NameContainer,
  RuleDate,
  RuleInfo,
} from "./Card.styles";

import { formatDate } from '../../utils/format';
import { CardSearch } from './CardSearch';


interface CardResult {
  id: string,
  name: string,
  lang: string,
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

interface CardRuleData {
  comment: string,
  published_at: string,
}
interface CardForm { 
  result: CardResult,
  rules: CardRuleData[]
}
interface CardRules {
  map(arg0: (rule: Text, index: Number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  length: number;
  data: CardRuleData[];
}

export function Card() {
  const [result, setResult] = useState<CardResult | null>(null)
  const [rules, setRules] = useState<CardRules | null>(null)


  const handleFormSubmit = (data: CardForm) => {
    setResult(data.result)
    setRules(data.rules)    
  };

  return (
    <>
      <Container>
        <CardSearch onFormSubmit={handleFormSubmit}  />
      </Container>

      {result !== null ?
        (
          <Container>
            <ResultBox>
              <NameContainer>
                <h2>{result.name}</h2>

                {result?.mana_cost && (
                  <h2>{result.mana_cost.replace(/{/g, "").replace(/}/g, " ")}</h2>
                )}
              </NameContainer>

              {result.image_uris &&(
                <ResultImg src={result.image_uris.art_crop} />
              )}

              <RuleInfo>
                <RuleText>
                  {result.type_line}
                </RuleText>

                <RuleText>
                  {
                    result.power ?
                      result.power + '/' + result.toughness
                    : result.loyalty ? 
                        result.loyalty
                      : ''
                  }
                </RuleText>
              </RuleInfo>

              {rules && rules.length > 0 ? (
                <RuleList>
                  {rules.map((rule: CardRuleData[], index:Number) => (
                    <RuleText key={index}>
                      <RuleDate>
                        {formatDate(rule.published_at)}:
                      </RuleDate>
                      {rule.comment}
                    </RuleText>
                  ))}
                </RuleList>
              ) : (
                <NoRule>
                  Nenhuma regra encontrada
                </NoRule>
              )}
            </ResultBox>
          </Container>
        ) : ''
      }
    </>
  )
}
