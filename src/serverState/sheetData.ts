import {selector} from 'recoil';

import {SHEET} from '../constants/sheet';
import {SheetNode, SheetEdge} from '../types/query/sheet';
import {fetchSheetData} from '../util/fetch/sheet';


export const nodeDataAtom = selector({
  key: 'nodeData',
  get: ({get}): Promise<SheetNode[]> => (
    fetchSheetData<SheetNode>(SHEET.id, SHEET.tab_id_nodes)
  ),
});

export const edgeDataAtom = selector({
  key: 'edgeData',
  get: ({get}): Promise<SheetEdge[]> => (
    fetchSheetData<SheetEdge>(SHEET.id, SHEET.tab_id_edges)
  ),
});
