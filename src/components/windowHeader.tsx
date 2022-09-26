import React, { memo } from 'react';

import { TCurrency } from '../@types/types';
import HeaderItem from './headerItem';
import { headerCurrencyConf } from '../config/config';

type TWindowHeaderProps = {
    currency: TCurrency;
};

const WindowHeader: React.FC<TWindowHeaderProps> = memo(({ currency }) => {
    return (
        <div className="header">
            <div className="header__currency-list">
                {headerCurrencyConf.exchangeTo.map((item) => {
                    return <HeaderItem key={item} item={item} price={1 / currency[item]} />;
                })}
            </div>
        </div>
    );
});

export default WindowHeader;
