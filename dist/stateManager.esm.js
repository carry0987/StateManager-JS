class StateManager {
    state;
    listeners = [];
    isDispatching = false;
    constructor(initialState) {
        this.state = initialState;
    }
    /**
     * Retrieves the current state.
     *
     * @returns The current state.
     */
    getState = () => this.state;
    /**
     * Retrieves the list of current listeners.
     *
     * @returns An array of listener functions.
     */
    getListeners = () => this.listeners;
    /**
     * Dispatches an action to the state manager by executing the provided reducer function.
     * It prevents nested dispatches.
     *
     * @param reducer A function that takes the current state and returns the new state.
     * @returns The new state after applying the reducer.
     */
    dispatch = (reducer) => {
        if (typeof reducer !== 'function') {
            throw new Error('Reducer is not a function');
        }
        if (this.isDispatching) {
            throw new Error('Reducers may not dispatch actions');
        }
        this.isDispatching = true;
        const prevState = this.state;
        try {
            this.state = reducer(this.state);
        }
        finally {
            this.isDispatching = false;
        }
        for (const listener of this.listeners) {
            listener(this.state, prevState);
        }
        return this.state;
    };
    /**
     * Subscribes a listener to state changes.
     * The listener is called whenever the state changes, with both the current and previous state.
     *
     * @param listener A function that will be called when the state changes.
     * @returns A function that can be called to unsubscribe the listener.
     */
    subscribe = (listener) => {
        if (typeof listener !== 'function') {
            throw new Error('Listener is not a function');
        }
        this.listeners = [...this.listeners, listener];
        return () => (this.listeners = this.listeners.filter((lis) => lis !== listener));
    };
}

const version = '1.0.0';

export { StateManager, version };
