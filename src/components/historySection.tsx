import React, { useEffect, useRef } from 'react';
import { HistoryItem } from './../entities/historyItem';

type THistorySection = {
    history: HistoryItem[];
    changeHistory: (item: HistoryItem | null) => void;
};

const HistorySection: React.FC<THistorySection> = ({ history, changeHistory }) => {
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    return (
        <>
            {history.length > 0 && (
                <button
                    className="main-history__clear-btn"
                    onClick={() => {
                        changeHistory(null);
                    }}>
                    &#128465;
                </button>
            )}
            <h1 className="main__title main-history__title">Exchange history</h1>
            <ol className="main-history__list">
                {history.map((obj, i) => {
                    return (
                        <li key={i} className="main-history__item">
                            {obj.base} {obj.amount} - {obj.convertedCurrency} {obj.convertedValue}
                        </li>
                    );
                })}
                <div ref={messagesEndRef} />
            </ol>
        </>
    );
};

export default HistorySection;
