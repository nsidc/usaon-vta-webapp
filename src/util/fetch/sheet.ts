import {tsvParse} from 'd3';

import {fetchUrl} from './helpers';
import {sheetUrl} from '../sheet';
import {SHEET_ID} from '../../constants/sheet';


// TODO: fix any
export const fetchSheetData = (): Promise<object> => {
  const url = sheetUrl(SHEET_ID, '0');
  return fetchUrl(url)
    .then((response) => response.text() as Promise<string>)
    .then((text) => tsvParse(text));
}
