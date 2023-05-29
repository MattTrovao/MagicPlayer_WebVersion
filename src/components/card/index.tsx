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
  ResultCaption,
  ResultImgBox,
} from "./Card.styles";

import { formatDate } from '../../utils/format';
import { CardSearch } from './CardSearch';

import { CardResult, CardRules, CardForm, CardRuleData } from '../../@types/card';


export function Card() {
  const [result, setResult] = useState<CardResult | null>(null)
  const [cardRules, setCardRules] = useState<CardRules | null>(null);


  const handleFormSubmit = (data: CardForm) => {
    setResult(data.result)
    setCardRules(prevState => ({
      ...prevState,
      data: data.rules,
      length: data.rules.length,
      map: (rule, index) => {
        // JSX.Element mapping logic
        return <div key={index}>{rule.comment}</div>;
      }
    }));
    console.log(cardRules);

  };

  return (
    <>
      <Container>
        <CardSearch onFormSubmit={handleFormSubmit} />
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

              {result.image_uris && (
                <ResultImgBox>
                  <ResultImg src={result.image_uris.art_crop} />
                  <ResultCaption>Artista: <b>{result.artist}</b></ResultCaption>
                </ResultImgBox>
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

              {cardRules && cardRules.data && cardRules.data.length > 0 ? (
                <RuleList>
                  {cardRules.data.map((data: CardRuleData, index: number) => (
                    <RuleText key={index.toString()}>
                      <RuleDate>
                        {formatDate(data.published_at)}:
                      </RuleDate>
                      {data.comment}
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
