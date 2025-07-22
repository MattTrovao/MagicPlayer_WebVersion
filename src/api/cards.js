import { api } from './axios';

export async function getNamedCard(card) {
    try {
        const response = await api.get(`named`, {
            params: { fuzzy: card }
        });
        return response.data;
    } catch (error) {
        return error?.response?.data?.error || 'Erro ao buscar carta';
    }
}
