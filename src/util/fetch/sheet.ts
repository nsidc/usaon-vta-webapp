import {fetchUrl} from './helpers';
import {sheetUrl} from '../sheet';
import {SHEET_ID} from '../../constants/sheet';


// TODO: fix any
export const fetchSheetData = (): Promise<any> => {
  const url = sheetUrl(SHEET_ID, '0');
  return fetchUrl(url)
    .then((response) => response.text() as Promise<string>)
}
