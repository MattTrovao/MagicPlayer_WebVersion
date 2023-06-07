import React from 'react';
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
  ResultCardFace,
  Divider,
} from "./Card.styles";

import { formatDate } from '../../utils/format';
import { CardSearch } from './CardSearch';

import { CardResult, CardRules, CardForm, CardRuleData, CardFace } from '../../@types/card';


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

                {result.card_faces[0]?.mana_cost && (
                  <h2>
                    {result.card_faces.map((data: CardFace, index: number) => (
                      <React.Fragment key={index}>
                        {data.mana_cost.replace(/{/g, "").replace(/}/g, " ")}
                        {index == 0 && ' // '}
                      </React.Fragment>
                    ))}
                  </h2>
                )}
              </NameContainer>

              {result.image_uris && (
                <ResultImgBox>
                  <ResultImg src={result.image_uris.art_crop} />
                  <ResultCaption>Artista: <b>{result.artist}</b></ResultCaption>
                </ResultImgBox>
              )}

              {result.card_faces && (
                <ResultImgBox className='cardFace'>
                  <ResultCardFace>
                    {result.card_faces.map((data: CardFace, index: number) => (
                      <ResultImg key={index} src={data.image_uris.art_crop} />
                    ))}
                  </ResultCardFace>
                  <ResultCaption>Artista: <b>{result.card_faces[0].artist}</b></ResultCaption>
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

                  {
                    result.card_faces &&
                    result.card_faces.map((data: CardFace, index: number) => (
                      <React.Fragment key={index}>
                        {
                          data.power ?
                            data.power + '/' + data.toughness
                            : data.loyalty ?
                              data.loyalty
                              : ''
                        }
                        {
                          index == 0 && (data.power || data.loyalty)
                            ? ' // ' : ''
                        }
                      </React.Fragment>
                    ))
                  }
                </RuleText>
              </RuleInfo>

              {
                result.oracle_text && (
                  <RuleText>
                    {
                      result.oracle_text
                        .replace(/{/g, "")
                        .replace(/}/g, " ")
                        .split('\n')
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line} <br /><br />
                          </React.Fragment>
                        ))
                    }
                  </RuleText>
                )
              }
              {result.flavor_text && (
                <RuleText>
                  <i>{result.flavor_text}</i>
                </RuleText>
              )}

              {result.card_faces && (
                <RuleText>
                  {result.card_faces.map((data: CardFace, index: number) => (
                    <React.Fragment key={index}>
                      {
                        data.oracle_text
                          .replace(/{/g, "")
                          .replace(/}/g, " ")
                          .split('\n')
                          .map((line, index) => (
                            <React.Fragment key={index}>
                              {line} <br /><br />
                            </React.Fragment>
                          ))
                      }

                      {data.flavor_text && (
                        <i>{data.flavor_text}</i>
                      )}

                      {index == 0 && <Divider />}
                    </React.Fragment>

                  ))}
                </RuleText>
              )}


              {cardRules && cardRules.data && cardRules.data.length > 0 ? (
                <>
                  <RuleInfo>
                    <RuleText>
                      Regras
                    </RuleText>
                    <RuleText>
                      <small>Regras retiradas do <a href={result.scryfall_uri} target='_blank'>Scryfall</a></small>
                    </RuleText>
                  </RuleInfo>
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
                </>
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
