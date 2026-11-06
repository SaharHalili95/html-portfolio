---
name: Sahar Halili
description: A software engineer presented the way Apple presents a product.
colors:
  ground: "#ffffff"
  ground-alt: "#f5f5f7"
  ink: "#1d1d1f"
  ink-secondary: "#6e6e73"
  link: "#0066cc"
  button: "#0071e3"
  button-hover: "#0077ed"
  status: "#1f8a3b"
  frame: "#1d1d1f"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(40px, 7.4vw, 80px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  section-title:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(36px, 5.6vw, 64px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  tagline:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(24px, 3.2vw, 36px)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.024em"
  intro:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "clamp(19px, 2.2vw, 24px)"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.016em"
  body:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: "-0.011em"
  caption:
    fontFamily: "{typography.display.fontFamily}"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
rounded:
  pill: "980px"
  frame: "clamp(12px, 2vw, 22px)"
  phone: "clamp(32px, 6vw, 44px)"
spacing:
  gutter: "clamp(20px, 5vw, 48px)"
  measure: "980px"
  wide: "1200px"
  section: "clamp(80px, 12vw, 140px)"
  chapter: "clamp(72px, 10vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.button}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  button-secondary:
    textColor: "{colors.link}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
  text-link:
    textColor: "{colors.link}"
    typography: "{typography.body}"
  nav-bar:
    height: "52px"
---

# Design System: Sahar Halili

## Overview

An Apple product page, applied to a person. One idea per screen, the real products as the hero material, and chrome so quiet it disappears. The page reads like a keynote: who he is, then one chapter per product, then what he can build for you, then a single clear way to get in touch.

It refuses the résumé template: no sidebar with a photo, no stacked white cards, no tag pills, no label above a headline.

## Colors

Restrained: white and a light gray band, near-black ink, and one blue that only ever means "act here" (buttons) or "go there" (links). Sections alternate between `ground` and `ground-alt` so chapters read as separate rooms without dividers. Secondary text is `ink-secondary`, never a lighter gray. The site is always light, whatever the device setting: the owner found a black page too dark, and Apple product pages stay light too.

## Typography

The platform face: SF on Apple devices, Segoe on Windows. Tracking is size-specific: large type is pulled tight (down to -0.035em), body sits near zero. Headlines balance; paragraphs use `text-wrap: pretty`. Hierarchy is built from size and weight together. A project chapter leads with the product's name at display scale, with its tagline under it in `ink-secondary`.

## Layout

A centered column of 980px for text, 1200px for screenshots, with a fluid gutter. Generous vertical rhythm: sections open with 80-140px of space, more above a heading than below it. On phones every multi-column grid becomes one column.

## Elevation & Depth

Depth comes from two things only. The nav is a translucent layer (`saturate(180%) blur(20px)`) the page scrolls under, and it thickens with a hairline after scrolling. Screenshots sit in a dark frame with a soft, offset shadow. No other surface casts a shadow.

## Shapes

Pills for buttons, generously rounded frames for screenshots, and a phone frame with a larger radius for mobile products. Hairlines (10% ink) separate list rows.

## Components

- **Nav:** photo and name, three section links, language switch, a small "Let's talk" pill. On phones the links collapse into a sheet that drops from the bar.
- **Buttons:** one primary pill per screen at most, plus "Learn more ›" style text links with a chevron that mirrors in Hebrew.
- **Project chapter:** name, tagline, summary, primary demo button and text links, the framed screenshot, three facts on hairlines, and a quiet "Built with" line.
- **Lists (more projects, services, about):** rows on hairlines, never cards.

## Do's and Don'ts

- Do show the real product before describing it.
- Do keep one blue for actions and links.
- Do animate only entrances (fade, rise, a slight scale on screenshots, once) and the press (scale 0.97).
- Don't put a small label above a headline.
- Don't use cards or pills as structure.
- Don't add a second accent color or a gradient.
