import {tsvParse} from 'd3';

import {fetchUrl} from './helpers';
import {sheetUrl} from '../sheet';


// TODO: fix any
export const fetchSheetData = (
  sheet_id: string,
  node_id: string,
): Promise<object> => {
  const url = sheetUrl(sheet_id, node_id);
  return fetchUrl(url)
    .then((response) => response.text() as Promise<string>)
    .then((text) => tsvParse(text));
}
