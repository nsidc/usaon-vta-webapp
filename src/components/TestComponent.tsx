import React from 'react';
import {useRecoilValue} from 'recoil';

import {sheetDataAtom} from '../serverState/sheetData';


const TestComponent: React.FC = () => {
  const sheetData = useRecoilValue(sheetDataAtom);
  return (
    <div>
      <pre>{JSON.stringify(sheetData, undefined, 2)}</pre>
    </div>
  );
}

export default TestComponent;
