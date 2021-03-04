import React, {useState} from 'react';
import { Display } from './components/Display';
import { Keyboard } from './components/Keyboard';

const App = () => {
  return (
    <div className="calculator-container">
      <Display />
      <Keyboard />
    </div>
  );
}

export default App;
