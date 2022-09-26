import axios from 'axios';

export const getCurrencyExchangeValue = (
    exchangeFrom: string,
    arrExchangeTo: string[],
    amount: string,
    round?: number,
) => {
    return axios
        .get('https://api.exchangerate.host/latest?/', {
            params: {
                base: exchangeFrom,
                symbols: arrExchangeTo.toString(),
                amount: amount,
                places: round,
            },
        })
        .then((res) => {
            return res.data.rates;
        });
};
