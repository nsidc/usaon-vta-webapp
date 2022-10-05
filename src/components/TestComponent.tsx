import React from 'react';
import {useRecoilValue} from 'recoil';

import {
  nodeDataAtom,
  edgeDataAtom,
} from '../serverState/sheetData';


const TestComponent: React.FC = () => {
  const nodeData = useRecoilValue(nodeDataAtom);
  const edgeData = useRecoilValue(edgeDataAtom);

  return (
    <div>
      <h2>Nodes</h2>
      <details>
        <summary>Click for JSON</summary>
        <pre>{JSON.stringify(nodeData, undefined, 2)}</pre>
      </details>
      <h2>Edges</h2>
      <details>
        <summary>Click for JSON</summary>
        <pre>{JSON.stringify(edgeData, undefined, 2)}</pre>
      </details>
    </div>
  );
}

export default TestComponent;
