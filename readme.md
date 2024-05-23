# Duplicator

A simple React component to duplicate its children a specified number of times.

## Purpose

The `Duplicator` component is designed to simplify the process of repeating a given set of React children a specified number of times. This is particularly useful when working with skeleton screens or loading placeholders, where you often need to display multiple instances of a loader or placeholder element.

## Installation

You can install the package via npm:

```sh
npm install react-duplicator
```

## Usage

```tsx
import { Duplicator } from 'react-duplicator';

const App = () => (
  <Duplicator count={3}>
    <div>Hello, World!</div>
  </Duplicator>
);

export default App;
```

## Props
`count` (number, optional): Number of times to duplicate the children. Defaults to 1.
`children` (ReactNode): The content to be duplicated.

## Error Handling

If the `count` prop is less than 1, the Duplicator component will log an error to the console and render nothing.

