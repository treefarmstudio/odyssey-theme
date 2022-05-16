---
title: Customizing The Theme
description: Lorem ipsum dolor sit amet - 2
layout: ../../layouts/MainLayout.astro
---

After you've had some time to familiarize yourself with the the theme files you're probably wondering "How do I make it my own?" This guide will help you swap out titles, descriptions, logos, etc.


## Global SEO

In the theme files you'll find a `settings.js` file under the `src/config/` folder. The contents of the file should look something like this:

```js
export default {
  title: `Odyssey Astro Theme | A Marketing Website Theme for Startups and Businesses`,
  description: `A simple, clean, and modern theme a startup or businesses' marketing website.`,
  url: `https://odyssey-theme.littlesticks.dev`, // No trailing slash!
  name: `Odyssey`, // The short name of the business or brand name. Used for things like the copyright in the footer.
  enableThemeSwitcher: true,
};  
```

The title and description fields here are used as the global defaults if one is not provided at the page level.

## Adding Your Own Logo

Under `src/components/` you'll see a `Logo.astro` file that should look something like this:

```astro
<p class="odyssey-logo">Odyssey</p>

<style>
  .odyssey-logo {
    width: fit-content;
    margin: 0;
    font-family: var(--theme-font-family-serif);
    font-size: var(--font-size-md);
    color: inherit;
  }
  .odyssey-logo:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
```

The easiest way to swap out the Odyssey logo across the site is to replace this code with the SVG code for your company's logo or using an `<img>` tag linked to your company logo.

You should see that the Odyssey logo changes across the theme once this is updated.

If you would like more control or don't like this method of using a `<Logo>` component you will find most of the components also include a `<slot>` for the logo which will let you completely replace it.

## Favicon

To replace the favicon you simply need to create your own `favicon.png` file and replace the one found under the `public/` folder.

If you don't want to use a `.png` file you will need to go to the `BaseHead.astro` component under `src/components/head/` and find this line to replace with your own favicon file.

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

## Open Graph / Social Image

To replace the default Open Graph image that displays when the link to your website is shared create your own `social.png` file and replace the one found under the `public/` folder.

## Navigation Items

Customizing the navigation items is easily done by editing the array of items in the `nav.js` file found under the `src/config/` folder.

It will look something like this:

```js
export const nav = [
  {
    title: 'Home',
    slug: '/',
  },
  {
    title: 'Blog',
    slug: '/blog',
  },
  {
    title: 'About',
    slug: '/company/about',
  },
  {
    title: 'Contact',
    slug: '/company/contact',
  },
];
```

## Footer Links

In the `src/config/` folder you'll find at `footer.js` file which is where the footer social icons, social links, and the footer nav items are updated.

### Social Links

The social links list will look something like this.

```js
export const footerSocials = [
  {
    url: 'https://instagram.com/',
    icon: instagramIcon,
  },
  {
    url: 'https://youtube.com/',
    icon: youtubeIcon,
  },
  {
    url: 'https://twitter.com/littlesticksdev',
    icon: twitterIcon,
  },
  {
    url: 'https://github.com/littlesticksdev/odyssey-theme',
    icon: githubIcon,
  },
];
```

The URLs are already set to safely open a new tab for the user when clicked so simply change our the URLs if you're happy with the icons provided.

However, if you'd like to customize the icons you can do this by providing your own icon SVGs in the `icons.js` file under the `src/icons/` folder.

### Footer Link Lists

Similar to the top-level nav items you'll see a `footerLists` array in `footer.js`

```js
export const footerLists = [
  {
    title: 'Landing Pages',
    items: [
      {
        title: 'Landing Page 1',
        slug: '/landing-pages/landing-1',
      },
      {
        title: 'Landing Page 2',
        slug: '/landing-pages/landing-2',
      },
    ],
  },
  ...
```

The title is the non-clickable title of the list and the nested items array is the list of links under that title. Feel free to customize the lists as needed.

## Creating A Custom Theme

Now the fun part. 

Editing the theme! 🎉

This is one of the core features of Odyssey Theme and we've made it super easy to make the overall look and feel of the site your own with just a few top-level CSS custom properties. These custom properties and demo themes will be found in the `theme.css` file under `public/styles/`.

First, If you are not planning on using the theme switcher found on the demo's home page we would recommend you go to the `settings.js` file under `src/config/` and set `enableThemeSwitcher` to false. This will remove the theme switcher components and javascript from your website.

Second, if you are only going to have one theme on your site (most common) then you can delete all of the `[data-theme]` rules from the file and only keep the `:root` theme that looks something like this.

```css
:root {
	/* Theme Colors */
	--theme-primary: hsl(0, 0%, 0%);
	--theme-primary-hover: hsl(0, 0%, 20%);
	--theme-on-primary: #fff;

	--theme-bg: #fff;
	--theme-on-bg: #000;

	--theme-surface-1: #f2f2f2;
	--theme-on-surface-1: #000;

	--theme-surface-2: #cce6d0;
	--theme-on-surface-2: #000;

	/* Theme Shapes */
	/* Set this to 0 if you want all of the rounded cards, images, etc to be straight edges */
	--theme-shape-radius: clamp(1rem, 2rem, 3rem);
	--theme-button-border-radius: 3rem;

	/* Theme Transition */
	--theme-transition: 0.2s ease-in-out;

	/* Theme Layout */
	--section-margin: 3rem;
	--theme-grid-gap: 1rem;
	--container-max-width: 1440px;
	--container-max-width-narrow: 960px;
	--container-padding: 0 1rem;

	--theme-blog-post-header-width: 1200px;

	/* Theme Fonts */
	--theme-font-family-serif: 'Roboto Serif', Georgia, Cambria, 'Times New Roman',
		Times, serif;
	--theme-font-family-sans: 'Lato', -apple-system, BlinkMacSystemFont,
		sans-serif;
}
```

Look below for a breakdown of each property.

### Colors

Here is a quick breakdown of the color properties:

- `--theme-primary` - The primary color of the theme. This would be the color used for the button backgrounds.
- `--theme-primary-hover` - The color you would like the primary color to change to when hovered over.
- `--theme-on-primary` - The color of text layered on top of the primary color.
- `--theme-bg` - The background color of the site
- `--theme-on-bg` - Default body text color
- `--theme-surface-1` - The color used for cards layered on top of the background. Think of it like a global accent color or a secondary background color.
- `--theme-on-surface-1` - The color used for text on top of the surface-1 color
- `--theme-surface-2` - Similar to the surface-1 color but used less often. Feel free to be more creative with this surface to make it pop on the page.
- `--theme-on-surface-2` - The color used for text on top of the surface-2 color

### Shapes

You'll notice a lot of rounded corners on the Odyssey Theme but if you look closely when the "Dark" theme is enabled the corners are all hard edges. This is because of the global `--theme-shape-radius` property. It will determine the shape of things like cards and images.

### Transition

Sometimes you want the animations to be consistent, especially on hover effects. This is where you would use the `--theme-transition` property.

### Layouts

- `--section-margin` - The default top and bottom margin between sections
- `--theme-grid-gap` - The default gap between items in a grid of cards, images, etc.
-	`--container-max-width` - The default container max width for content
-	`--container-max-width-narrow` - The narrow container max width for content
-	`--container-padding` - The default gutter padding on the container

### Custom Font(s)

1. Edit the Google Fonts import URL found in the `BaseHead.astro` file in the `src/components/head/` folder.

2. Update your font stack with the `--theme-font-family-serif` and `--theme-font-family-sans` custom properties.

