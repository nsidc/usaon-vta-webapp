import {SHEET_URL_TEMPLATE} from '../constants/sheet';


export const sheetUrl = (sheetId: string, tabId: string) => {
  // Evaluate a "template" string with given vars
  const withSheetId = SHEET_URL_TEMPLATE.replace("${sheet_id}", sheetId);
  const evaluated = withSheetId.replace("${tab_id}", tabId);

  return evaluated;
}
