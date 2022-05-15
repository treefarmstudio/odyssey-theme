---
title: Customizing The Theme
description: Lorem ipsum dolor sit amet - 2
layout: ../../layouts/MainLayout.astro
---

After you've had some time to familiarize yourself with the the theme files you're probably wondering "How do I make it my own?" This guide will help you swap out titles, descriptions, logos, etc.


## Global SEO

In the theme files you'll find a `settings.js` file under the `src/config/` folder. The contents of the file should look something like this.

```js
export default {
  title: `Odyssey Astro Theme | A Marketing Website Theme for Startups and Businesses`,
  description: `A simple, clean, and modern theme a startup or businesses' marketing website.`,
  url: `https://odyssey-theme.littlesticks.dev`, // No trailing slash!
  name: `Odyssey`, // The short name of the business or brand name. Used for things like the copyright in the footer.
  disableThemeSwitcher: false,
};  
```

The title and description fields here are used as the global defaults if one is not provided at the page level.

## Adding Your Own Logo

## Open Graph / Social Image

## Navigation Items

## Footer Links

## Customizing The Theme Colors

## Custom Fonts
