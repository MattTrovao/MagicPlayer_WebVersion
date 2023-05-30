import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Container } from "../global/Container";
import { Label } from "../global/Label";
import {
  CardBox,
  CardForm,
  SearchBar,
  SearchBtn,
  SearchLegend,
} from "./Card.styles";
import { api } from '../../utils/axios';


const newCardFormValidationSchema = zod.object({
  card: zod.string().min(3, 'Adicione ao menos 3 caracteres')
})

type CardFormData = zod.infer<typeof newCardFormValidationSchema>


export function CardSearch({onFormSubmit}: any) {
  const { register, handleSubmit, watch } = useForm<CardFormData>({
    resolver: zodResolver(newCardFormValidationSchema),
    defaultValues: {
      card: '',
    }
  })


  const handleSearchCard = async(data: CardFormData) => {

    const response = await api.get(`named?fuzzy=${data.card}`)

    const rulings = await api.get(`${response.data.id}/rulings`)

    const ruleList = rulings.data.data;

    const mappedRuleList = ruleList.map((item: any) => ({
      comment: item.comment,
      published_at: item.published_at
    }));
   
    
    onFormSubmit({
      result: response.data,
      rules: mappedRuleList
    })
  }

  const disableCardSearch = watch('card')

  return (
    <CardBox>
      <Label htmlFor="CardInput">Busque por uma carta</Label>
      <CardForm onSubmit={handleSubmit(handleSearchCard)}>
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
      </CardForm>
      <SearchLegend>
        Para garantir mais resultados prefira buscar o nome da carta em <b>Inglês</b>. <br />
        <small>Idiomas disponíveis: Inglês, Espanhol, Francês, Português, Alemão, Italiano, Japonês, Koreano, Russo, Chinês (Tradicional e Simplificado)</small>
      </SearchLegend>
    </CardBox>
  )
}