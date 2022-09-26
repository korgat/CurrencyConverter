import React from 'react';
import Select from 'react-select';

import { ratesConf, TRateItem } from './../config/config';

type TCurrencySectionProps = {
    setSelect: (rateItem: TRateItem) => Promise<void>;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    onDebounce: (value: string) => void;
    inputValue: string;
    selectValue: TRateItem;
};

const CurrencySection: React.FC<TCurrencySectionProps> = ({
    inputValue,
    selectValue,
    setSelect,
    setInput,
    onDebounce,
}) => {
    const handleSelectChange = (value: TRateItem | null) => {
        if (value) {
            setSelect(value);
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (/(?<=^| )\d+(\.\d+|\.)?(?=$| )|^$/g.test(e.target.value)) {
            setInput(e.target.value);
            onDebounce(e.target.value);
        }
    };

    return (
        <div className="main-window__section">
            <input
                onInput={handleInput}
                value={inputValue}
                className="top__input"
                type="text"
                placeholder="0"
            />
            <Select
                classNamePrefix="react-select"
                value={selectValue}
                options={ratesConf}
                onChange={handleSelectChange}
            />
        </div>
    );
};

export default CurrencySection;
