Copyright 2014 Telegraph Creative. All rights reserved. No part of these materials may be reproduced, modified, stored in a retrieval system, or retransmitted, in any form or by any means, electronic, mechanical or otherwise, without prior written permission from Telegraph Creative.

Park Cities Presbyterian FED
========================


* [What is this?](#what-is-this)
* [What's it built with?](#what-is-this)
* [What's included?](#what-is-this)
* [Track Progress](#track-progress)

What is this?
-------------

This is the FED for the pcpc.org. Check it out: http://bradfordbradford.github.io/pcpc-fed-rework/


What's it built with?
-------------

This project is built with the following libraries:

* [Bourbon](http://bourbon.io/) (4.0.0)


* [Neat](http://neat.bourbon.io/) (1.6.0)


* [Bitters](http://bitters.bourbon.io/) (0.9.3)


* [Refills](http://refills.bourbon.io/) (0.0.2)


Compiled with Sass. 3.3.7



What's included?
-------------

### CSS
- app.css - main stylesheet file

- ie.css - fallback stylesheet for IE8

### SCSS
- app.scss - Imports Bourbon, Neat, and Refills. Also, pulls in custom files to extend basic mixins and Refills with site audio player styles, menu styles, etc. Finally, this file rounds out with media queries and basic print styles.

- ie.scss - Outputs to the IE stylesheet in the CSS directory

### JS
- app.js - main initializing file

- sitescripts.js - main plugins file

- homescripts.js - scripts for home page slider

### Fonts
- all-purpose - a handy font kit with commonly used icons.

_Preview this font: assets/fonts/icons-reference.html

### HTACCESS
- example.htaccess - Sets up MIME-types for Linux/Apache servers [Reference: MediaElement.js](http://mediaelementjs.com/#installation)

### Browser Compatibility

Built to run beautifully in modern browsers while withstanding the terrors of IE8. Best results in IE8 rely on **ie.min.js** which includes the following:

- selectivr.js 3.7.2

- html5shiv.js v1.0.2


### Layouts/Patterns

**Patterns**

- Main Nav & Footer

- Lists (sermons/media, profiles, events, definitions, ordered, unordered)

- Articles (links, sub headers, dates, lead paragraphs)

- Page Headers (title and lead content + optional button)

- Blockquotes, citations

- Breadcrumbs

- Audio Player Skin

- Responsive Videos

- Horizontal Tabs

- Tables

**Views**

- Home Layout

- Inner Page with 2 column layout (sub nav and article)

- Inner Page with full bleed layout


Track Progress
-------------

Follow along with the latest via the [Burnlist](https://github.com/bradfordbradford/pcpc-fed-rework/blob/master/burnlist.md)

