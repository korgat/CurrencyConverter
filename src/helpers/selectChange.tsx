import { TSelectItem } from '../@types/types';
import { TRateItem } from '../config/config';

import { HistoryItem } from '../entities/historyItem';
import { getCurrencyExchangeValue } from '../API/getExchangeValue';

export const selectChange = (
    setCurrentSelect: React.Dispatch<React.SetStateAction<TSelectItem>>,
    setOppositeInput: React.Dispatch<React.SetStateAction<string>>,
    changeHistory: (item: HistoryItem) => void,
    currentInput: string,
    oppositeInput: string,
    oppositeSelect: TSelectItem,
) => {
    return async (rateItem: TRateItem) => {
        setCurrentSelect(rateItem);

        if (currentInput) {
            const rates = await getCurrencyExchangeValue(
                rateItem.value,
                [oppositeSelect.value],
                currentInput,
                2,
            );
            const convertedValue = rates[oppositeSelect.value];

            setOppositeInput(convertedValue);
            console.log(oppositeSelect.value, oppositeInput, rateItem.value, convertedValue);
            changeHistory(
                new HistoryItem(rateItem.value, currentInput, oppositeSelect.value, convertedValue),
            );
        }
    };
};
