export const debounce = (cb: Function, ms: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this, args);
        }, ms);
    };
};
