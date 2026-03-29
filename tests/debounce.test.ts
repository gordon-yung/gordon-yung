import { debounce } from "../src/debounce";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});
test("debounce should delay function execution", () => {
    const mockFunc = jest.fn();
    const debouncedFunc = debounce(mockFunc, 100);

    debouncedFunc(1);
    debouncedFunc(2);
    debouncedFunc(3);

    // Wait for the debounce delay
    jest.advanceTimersByTime(100);

    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveBeenCalledWith(3);
});

