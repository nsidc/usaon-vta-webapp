/* Constants about the source data in Google Sheets.
 *
 * TODO:
 *   * This data is relational, and we need a model for how sheets or tabs
 *     relate to each-other.
 */
import {Sheet} from '../types/sheet';


export const SHEET_URL_TEMPLATE = 'https://docs.google.com/spreadsheets/d/e/${sheet_id}/pub?gid=${tab_id}&output=tsv'

// Using the "aon-sankey: River Watch" spreadsheet; the others are available
// "published", but the tab identifiers aren't discoverable without access the
// the original (not "pub") sheet. Need to request access or sheet IDs (see
// `gid=?` in the URL). Only the first tab has a predictable ID (0)
export const SHEET: Sheet  = {
  // The URL of a _published_ sheet:
  id: '2PACX-1vR3HNKcyZWsXCn5Idj1JNWKCzRz1e-IMXCuP6yN2ySi3D5-eu3dtDTOuDSEfxidl9LOvAj1zHyeksOU',
  tab_id_nodes: '0',
  tab_id_edges: '1551812291',
}
