import React from 'react';

import pkg from '../package.json';
import './style/App.css';

import TestComponent from './components/TestComponent';
import SankeyChart from './components/SankeyChart';


const App: React.FC = () => {
  return (
    <div className={"App"}>

      <div id={"version"}>v{pkg.version}</div>

      <TestComponent />

      <SankeyChart />

    </div>
  );
}

export default App;
