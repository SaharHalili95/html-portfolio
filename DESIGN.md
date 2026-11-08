# Design System: Sahar Halili

A personal page, not a product landing page. It reads like the sites of serious engineers and founders: a name, a few plain sentences and a list of what he has made. A live map of his projects leads, over a terrain that moves only while the visitor scrolls.

## Signature

`ProjectGraph`: Sahar's photo is the hub, inside two perimeter rings, and each main project is a node linked to it, the same network as his LinkedIn banner. Nodes can be dragged and spring back. Hovering a node or its row shows that project's screenshot. Scrolling to a section lights up its part of the map.

## Colors

Pastel green paper `#dcefe0`, ink `#181a1f`, secondary `#47574f`. Color has one job, the project groups: security `#0a6f5f`, learning `#b0640b`, other `#465478`.

## Typography

Frank Ruhl Libre (Hebrew and Latin) for the name and the lead sentence. System sans for everything else.

## Motion

Critically damped springs by default, with a little bounce only after a thrown drag. One entrance cascade, transitions under 300ms, hover gated to fine pointers. `ScrollField` draws contour lines and orbit rings on a fixed canvas: scroll morphs the terrain through a critically damped spring, the section in view tints it, and it stops drawing at rest. Reduced motion gets a static map and a static terrain.

## Don'ts

No hero slogan, no filled call-to-action buttons, no device mockups, no periods on headings.
