import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface User {
  name: string,
  age: number,
  email?: boolean,
};

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState<User>({
    name: '',
    age: 1,
  });
  const [value, setValue] = useState<{[key: string]: string}>({
    uno: 'uno',
  });
  const [value1, setValue1] = useState<Record<string, User>>({
    uno: {
      name: '',
      age: 10,
    },
  });
  const sumar = (num: number) => {
    setCount(count + num);
    console.log('count: ', count);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => sumar(2)}>Sumar</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
