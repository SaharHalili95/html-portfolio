# Design System: Sahar Halili

A personal page, not a product landing page. It reads like the sites of serious engineers and founders: a name, a few plain sentences and a list of what he has made. A live map of his projects leads, over a terrain that moves only while the visitor scrolls.

## Signature

`ProjectGraph`: Sahar's photo is the hub, inside two perimeter rings, and each main project is a node linked to it, the same network as his LinkedIn banner. Nodes can be dragged and spring back. Hovering a node or its row shows that project's screenshot. Scrolling to a section lights up its part of the map.

## Colors

Deep green background `#10231c`, light text `#e9f2ec`, secondary `#a9bdb2`. Color has one job, the project groups: security `#4ecdb2`, learning `#eeaa4f`, other `#a3b4e6`.

## Typography

Frank Ruhl Libre (Hebrew and Latin) for the name and the lead sentence. System sans for everything else.

## Motion

Critically damped springs by default, with a little bounce only after a thrown drag. One entrance cascade, transitions under 300ms, hover gated to fine pointers. `ScrollField` draws contour lines and orbit rings on a fixed canvas: scroll morphs the terrain through a critically damped spring, the section in view tints it, and it stops drawing at rest. Reduced motion gets a static map and a static terrain.

## Don'ts

No hero slogan, no filled call-to-action buttons, no device mockups, no periods on headings.
