/* Types of data queried from Google Sheets
 *
 * NOTE: All fields are strings because Google Docs does not have a
 * typed export format; only CSV or TSV.
 */

export interface SheetNode {
  label: string;
  metadata_description: string;
  node_type: string;
  node_type_color: string;
  value: string;
};

export interface SheetEdge {
  source: string;
  target: string;
  weight: string;
  performance: string;
};
