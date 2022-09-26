import React from 'react';

type THeaderItemProps = {
    item: string;
    price: number;
};

const HeaderItem: React.FC<THeaderItemProps> = ({ item, price }) => {
    return (
        <div className="currency-item">
            <span className="currency-item__name">{item}</span>
            <span className="currency-item__price">{price ? price.toFixed(2) : '--.--'}</span>
        </div>
    );
};

export default HeaderItem;
