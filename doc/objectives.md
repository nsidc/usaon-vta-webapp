# Objectives

Produce a interactive webapp visualizing US AON Value Tree Analysis with a Sankey
diagram.

![US AON Value Tree Analysis Sankey
diagram](https://legacyaoos2.wpengine.com/wp-content/uploads/2021/01/VTA-example.jpg)


## Minimum viable product

1. Some way to gather input from the public
1. Some way to curate the input from the public into a mature dataset
1. Some way to plot the curated data


### Open questions

1. How will we enable data-editing in the short-term? We're not going to have time to
   implement our own back-end for the MVP. Some options: Google Sheets (collaborative
   editing, GUI interface, possibly rate-limited, US AON already has a Google sheet);
   localstorage; exported and user-managed JSON (could be any HTTP URL that yields JSON,
   or user-uploaded, US AON is familiar with this representation); ??
   * Clarify needs with US AON 
1. Where will this run? NSIDC?


## Things we want

* Ability to use user's own dataset instead of the US AON dataset (e.g. upload or link
  to data)
* Ability to save plot as image to local computer
* Ability to click a node and highlight all dependents and dependencies (trace all
  connected flows to the left and to the right); should be toggleable so user can export
  as image
* Ability to view values associated with each flow (e.g. hover to view)


## Probably future features

* Ability to move nodes and save their positions
* Ability to edit node connections, values, and weights within the visualization and
  save changes
