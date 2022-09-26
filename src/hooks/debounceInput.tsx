import { useCallback } from 'react';
import { TSelectItem } from '../@types/types';
import { getCurrencyExchangeValue } from '../API/getExchangeValue';
import { HistoryItem } from '../entities/historyItem';
import { debounce } from '../utils/debounce';

export function useDebounceInput(
    setOppositeInput: React.Dispatch<React.SetStateAction<string>>,
    currentSelect: TSelectItem,
    oppositeSelect: TSelectItem,
    changeHistory: (item: HistoryItem) => void,
) {
    const debounceOnInput: (value: string) => void = useCallback(
        debounce(async (value: string) => {
            if (!value) {
                setOppositeInput('');
                return;
            }

            const rates = await getCurrencyExchangeValue(
                currentSelect.value,
                [oppositeSelect.value],
                value,
                2,
            );
            const convertedValue = rates[oppositeSelect.value];
            setOppositeInput(convertedValue);
            changeHistory(
                new HistoryItem(currentSelect.value, value, oppositeSelect.value, convertedValue),
            );
        }, 1000),
        [oppositeSelect, currentSelect],
    );

    return debounceOnInput;
}
