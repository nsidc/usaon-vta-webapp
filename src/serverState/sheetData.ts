import {selector} from 'recoil';

import {SHEET} from '../constants/sheet';
import {fetchSheetData} from '../util/fetch/sheet';


export const nodeDataAtom = selector({
  key: 'nodeData',
  get: ({get}): Promise<object> => fetchSheetData(SHEET.id, SHEET.tab_id_nodes),
});

export const edgeDataAtom = selector({
  key: 'edgeData',
  get: ({get}): Promise<object> => fetchSheetData(SHEET.id, SHEET.tab_id_edges),
});
