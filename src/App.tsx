import React from 'react';

import pkg from '../package.json';
import './style/App.css';

const App: React.FC = () => {
  return (
    <div className={"App"}>
      <div id={"version"}>v{pkg.version}</div>

      <div>Hello world!</div>

    </div>
  );
}

export default App;
