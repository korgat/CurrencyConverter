export class HistoryItem {
    constructor(
        public base: string,
        public amount: string,
        public convertedCurrency: string,
        public convertedValue: string,
    ) {}
}
