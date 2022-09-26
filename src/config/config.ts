export type TRateItem = {
    value: string;
    label: string;
};

export const ratesConf: TRateItem[] = [
    { value: 'UAH', label: 'UAH' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'RUB', label: 'RUB' },
    { value: 'CAD', label: 'CAD' },
    { value: 'CZK', label: 'CZK' },
    { value: 'DKK', label: 'DKK' },
    { value: 'GBP', label: 'GBP' },
    { value: 'INR', label: 'INR' },
    { value: 'CHF', label: 'CHF' },
];

export const headerCurrencyConf = {
    base: 'UAH',
    exchangeTo: ['EUR', 'USD'],
};
