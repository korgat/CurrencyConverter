import { useState, useEffect } from 'react';
import { HistoryItem } from './../entities/historyItem';

export function useLocalHistory() {
    let [history, setHistory] = useState<HistoryItem[]>([]);

    const changeHistory = (item: HistoryItem | null) => {
        setHistory((history) => {
            const newHistory = item ? [...history, item] : [];
            localStorage.setItem('exchangeHistory', JSON.stringify(newHistory));
            return newHistory;
        });
    };

    useEffect(() => {
        if (localStorage.exchangeHistory) {
            setHistory(() => JSON.parse(localStorage.exchangeHistory));
        }
    }, []);

    return {
        history,
        changeHistory,
    };
}
