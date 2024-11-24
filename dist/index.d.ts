declare class StateManager<S = Record<string, unknown>> {
    private state;
    private listeners;
    private isDispatching;
    constructor(initialState: S);
    /**
     * Retrieves the current state.
     *
     * @returns The current state.
     */
    getState: () => S;
    /**
     * Retrieves the list of current listeners.
     *
     * @returns An array of listener functions.
     */
    getListeners: () => ((current?: S, prev?: S) => void)[];
    /**
     * Dispatches an action to the state manager by executing the provided reducer function.
     * It prevents nested dispatches.
     *
     * @param reducer A function that takes the current state and returns the new state.
     * @returns The new state after applying the reducer.
     */
    dispatch: (reducer: (state: S) => S) => S;
    /**
     * Subscribes a listener to state changes.
     * The listener is called whenever the state changes, with both the current and previous state.
     *
     * @param listener A function that will be called when the state changes.
     * @returns A function that can be called to unsubscribe the listener.
     */
    subscribe: (listener: (current?: S, prev?: S) => void) => (() => void);
}

declare const version: string;

export { StateManager, version };
