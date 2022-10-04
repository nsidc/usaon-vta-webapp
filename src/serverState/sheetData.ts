import {selector} from 'recoil';
import {tsvParse} from 'd3';

import {fetchSheetData} from '../util/fetch/sheet';


export const sheetDataAtom = selector({
  key: 'sheetdata',
  get: async ({get} )=> {
    const response = await fetchSheetData();
    const data = tsvParse(response);
    return data;
  },
});
