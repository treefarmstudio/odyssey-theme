---
title: Odyssey Theme Blog Components
description: Learn how to implement the blog components Odyssey Theme includes.
layout: ../../../layouts/MainLayout.astro
---

## BlogPostPreview

[View Source Code](https://github.com/littlesticksdev/odyssey-theme/blob/main/components/packages/components/blog/BlogPostPreview.astro)

This component is meant to be used in tandem with the `<BlogPostsList>` component. However, it can be used individually if you'd like to create your own list style for blog posts.

### Props

- `post` - Expected to contain the following sub fields.

  - `post.href` - The link to the blog post
  - `post.featuredImage` - The `src` value for the featured image of the blog post
  - `post.title` - The title of the blog post
  - `post.excerpt` - A short excerpt from the content of the blog post. Should be no more than 2 sentences.

### Example

```astro
{posts?.map((post) => {
  return (
    <BlogPostPreview post={post} />
  )
})} 
```

## BlogPostsList

[View Source Code](https://github.com/littlesticksdev/odyssey-theme/blob/main/components/packages/components/blog/BlogPostsList.astro)

This component generates a list of `<BlogPostPreview>` components in a grid layout.

### Props

- `posts` - An array of `post` objects that each contain a title, href, featured image, published date, and excerpt.

### Example

```astro
---
const posts = await Astro.glob('./posts/*.md').then(posts =>
	posts
		.map(({ frontmatter, url }) => ({
			title: frontmatter.title,
			description: frontmatter.description,
			publishDate: parse(frontmatter.publishDate, 'MMMM d, yyyy', new Date()),
			featuredImage: frontmatter.featuredImage,
			excerpt: frontmatter.excerpt,
			href: url,
		}))
		.sort((a, b) => {
			if (isBefore(a.publishDate, b.publishDate)) return 1;
			if (isBefore(b.publishDate, a.publishDate)) return -1;
			return 0;
		})
);
---

...

<BlogPostsList posts={posts} />
```



