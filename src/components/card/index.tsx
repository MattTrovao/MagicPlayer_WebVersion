import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../global/Container";
import { Label } from "../global/Label";
import {
  CardBox,
  CardSearch,
  NoRule,
  ResultBox,
  ResultImg,
  RuleList,
  RuleText,
  SearchBar,
  SearchBtn,
  SearchLegend,
  NameContainer,
  RuleDate,
  RuleInfo,
} from "./Card.styles";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { api } from '../../utils/axios';
import { formatDate } from '../../utils/format';


const newCardFormValidationSchema = zod.object({
  card: zod.string().min(3, 'Adicione ao menos 3 caracteres')
})

type CardFormData = zod.infer<typeof newCardFormValidationSchema>

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
interface CardRules {
  data: CardRuleData[];
}

export function Card() {
  const [result, setResult] = useState<CardResult | null>(null)
  const [rules, setRules] = useState<CardRules | null>(null)

  const { register, handleSubmit, watch } = useForm<CardFormData>({
    resolver: zodResolver(newCardFormValidationSchema),
    defaultValues: {
      card: '',
    }
  })

  async function handleSearchCard(data: CardFormData) {

    const response = await api.get(`named?fuzzy=${data.card}`)
    setResult(response.data)

    let ruleData = response.data.rulings_uri.replace("https://api.scryfall.com/cards/", "").replace("/rulings", "");
    const rulings = await api.get(`${ruleData}/rulings`)

    const ruleList = rulings.data.data;

    const mappedRuleList = ruleList.map((item: any) => ({
      comment: item.comment,
      published_at: item.published_at
    }));

    const cardRules: CardRules = {
      data: mappedRuleList
    };

    setRules(cardRules);
  }

  const disableCardSearch = watch('card')

  return (
    <>
      <Container>
        <CardBox>
          <Label htmlFor="CardInput">Busque por uma carta</Label>
          <CardSearch onSubmit={handleSubmit(handleSearchCard)}>
            <SearchBar
              placeholder="The Scarab God"
              id="CardInput"
              {...register('card')}
            />
            <SearchBtn
              disabled={!disableCardSearch}
              type="submit"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchBtn>
          </CardSearch>
          <SearchLegend>
            Para garantir mais resultados prefira buscar o nome da carta em <b>Inglês</b>. <br />
            <small>Idiomas disponíveis: Inglês, Espanhol, Francês, Português, Alemão, Italiano, Japonês, Koreano, Russo, Chinês (Tradicional e Simplificado)</small>
          </SearchLegend>
        </CardBox>
      </Container>

      {result !== null ?
        (
          <Container>
            <ResultBox>
              <NameContainer>
                <h2>{result.name}</h2>

                <h2>{result.mana_cost.replace(/{/g, "").replace(/}/g, " ")}</h2>
              </NameContainer>

              <ResultImg src={result.image_uris.art_crop} />

              <RuleInfo>
              <RuleText>
                {result.type_line}
              </RuleText>

              <RuleText>
              {
                result.power ?
                 result.power + '/' + result.toughness 
                : result.loyalty ? result.loyalty
                 : ''
              }
              </RuleText>
              </RuleInfo>

              {rules && rules.data.length > 0 ? (
                <RuleList>
                  {rules.data.map((rule, index) => (
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
