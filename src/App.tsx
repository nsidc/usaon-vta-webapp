import React from 'react';

import pkg from '../package.json';
import './style/App.css';

import TestComponent from './components/TestComponent';


const App: React.FC = () => {
  return (
    <div className={"App"}>
      <div id={"version"}>v{pkg.version}</div>

      <TestComponent />

    </div>
  );
}

export default App;
