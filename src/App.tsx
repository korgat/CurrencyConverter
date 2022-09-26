import './App.scss';
import { headerCurrencyConf, ratesConf } from './config/config';

import React, { useEffect, useState } from 'react';

import { useLocalHistory } from './hooks/localHistory';
import { useDebounceInput } from './hooks/debounceInput';

import { getCurrencyExchangeValue } from './API/getExchangeValue';
import { selectChange } from './helpers/selectChange';

import { TSelectItem } from './@types/types';
import { CurrencySection, HistorySection, WindowHeader } from './components';

const App: React.FC = () => {
    const [currency, setCurrency] = useState({});
    const { history, changeHistory } = useLocalHistory();

    const [firstSelect, setFirstSelect] = useState<TSelectItem>(ratesConf[0]);
    const [firstInput, setFirstInput] = useState('');

    const [secondSelect, setSecondSelect] = useState<TSelectItem>(ratesConf[1]);
    const [secondInput, setSecondInput] = useState('');

    useEffect(() => {
        (async () => {
            const headerCurrency = await getCurrencyExchangeValue(
                headerCurrencyConf.base,
                headerCurrencyConf.exchangeTo,
                '1',
            );

            setCurrency(headerCurrency);
        })();
    }, []);

    const debounceOnInput1 = useDebounceInput(
        setSecondInput,
        firstSelect,
        secondSelect,
        changeHistory,
    );
    const debounceOnInput2 = useDebounceInput(
        setFirstInput,
        secondSelect,
        firstSelect,
        changeHistory,
    );

    const onFirstSelectChange = selectChange(
        setFirstSelect,
        setSecondInput,
        changeHistory,
        firstInput,
        secondInput,
        secondSelect,
    );

    const onSecondSelectChange = selectChange(
        setSecondSelect,
        setFirstInput,
        changeHistory,
        secondInput,
        firstInput,
        firstSelect,
    );

    return (
        <div className="App">
            <div className="App">
                <div className="container">
                    <main className="main">
                        <div className="main-window">
                            <WindowHeader currency={currency} />
                            <div className="main-window__content">
                                <h1 className="main__title main-window__content-title">
                                    Currency converter
                                </h1>
                                <CurrencySection
                                    setSelect={onFirstSelectChange}
                                    setInput={setFirstInput}
                                    onDebounce={debounceOnInput1}
                                    selectValue={firstSelect}
                                    inputValue={firstInput}
                                />
                                <CurrencySection
                                    setSelect={onSecondSelectChange}
                                    setInput={setSecondInput}
                                    onDebounce={debounceOnInput2}
                                    selectValue={secondSelect}
                                    inputValue={secondInput}
                                />
                            </div>
                        </div>
                        <div className="main-history">
                            <HistorySection history={history} changeHistory={changeHistory} />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default App;
