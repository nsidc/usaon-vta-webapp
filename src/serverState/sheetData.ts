import {selector} from 'recoil';

import {fetchSheetData} from '../util/fetch/sheet';


export const sheetDataAtom = selector({
  key: 'sheetData',
  get: ({get}): Promise<object> => fetchSheetData(),
});
