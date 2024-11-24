# StateManager-JS
[![NPM](https://img.shields.io/npm/v/@carry0987/state-manager.svg)](https://www.npmjs.com/package/@carry0987/state-manager)
![CI](https://github.com/carry0987/StateManager-JS/actions/workflows/ci.yml/badge.svg)  
The `@carry0987/state-manager` package is a versatile and generic TypeScript-based state management utility designed to simplify managing application state with minimal boilerplate. By employing the power of generic types, `@carry0987/state-manager` allows developers to define their state structures, ensuring type safety and reducing runtime errors. This package is especially useful for applications that require a centralized state management solution without the complexity of larger libraries like Redux.

At its core, `@carry0987/state-manager` maintains a single state object and provides a mechanism for updating this state through a functional approach. The `dispatch` method facilitates state transitions using reducer functions, ensuring immutability and predictable state changes. By leveraging the `subscribe` method, developers can attach listeners that react to state changes, receiving notifications about both the current and previous state. This allows applications to efficiently update the UI, trigger side effects, or perform other tasks in response to state transitions.

Overall, `@carry0987/state-manager` provides a powerful yet lightweight solution for state management, making it an ideal choice for small to medium-sized applications or projects where simplicity and efficiency are paramount.

## Features
- Lightweight and easy to integrate into existing projects
- Type-safe state management
- Efficient state update mechanism with `dispatch`
- Flexible subscription management
- Notification of state changes to multiple listeners

## Installation
To install the `StateManager` library, use the following command:

```bash
npm i @carry0987/state-manager -D
```

## Usage

### Importing the Library
First, import the `StateManager` class into your TypeScript file:

```typescript
import { StateManager } from '@carry0987/state-manager';
```

### Creating a StateManager Instance
Create an instance of `StateManager` with your initial state:

```typescript
interface MyState {
    count: number;
}

const initialState: MyState = { count: 0 };
const stateManager = new StateManager(initialState);
```

### Accessing State
Use the `getState` method to access the current state:

```typescript
const currentState = stateManager.getState();
console.log(currentState);
```

### Subscribing to State Changes
Use the `subscribe` method to listen for state changes:

```typescript
stateManager.subscribe((current, previous) => {
    console.log('State changed from', previous, 'to', current);
});
```

### Dispatching State Changes
Update the state using the `dispatch` method with a reducer function:

```typescript
stateManager.dispatch((state) => ({ count: state.count + 1 }));
```

### Unsubscribing from State Changes
When you no longer need to listen for changes, unsubscribe the listener:

```typescript
const unsubscribe = stateManager.subscribe((current, previous) => {
    console.log('State changed from', previous, 'to', current);
});

unsubscribe();
```

## API

### `getState(): S`
Retrieves the current state.

### `getListeners(): ((current?: S, prev?: S) => void)[]`
Retrieves the list of current listeners.

### `dispatch(reducer: (state: S) => S): S`
Dispatches a state change by executing the provided reducer function. It prevents nested dispatches.

### `subscribe(listener: (current?: S, prev?: S) => void): () => void`
Subscribes a listener to state changes. The listener is called whenever the state changes, with both the current and previous state.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
