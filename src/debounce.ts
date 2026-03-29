type Func = (...args: any[]) => any;

export function debounce(func: Func, wait?: number): (...args: Parameters<Func>) => void {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    return function (...args: Parameters<Func>): void {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            func(...args);
        }, wait);
    };
}