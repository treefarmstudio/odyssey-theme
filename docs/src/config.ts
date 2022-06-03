export const SITE = {
	title: 'Odyssey Theme Documentation',
	description: 'This is the official documentation for the Odyssey Theme.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'littlesticksdev',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Getting Started', header: true },
		{ text: 'Introduction', link: 'en/introduction' },

		{ text: 'Theme', header: true },
		{ text: 'Theme Setup', link: 'en/theme/theme-setup' },
		{ text: 'Customizing The Theme', link: 'en/theme/customizing-the-theme' },
    { text: 'Components', header: true },
		{ text: 'Components Overview', link: 'en/components' },
		{ text: 'Blog Components', link: 'en/components/blog' },
		{ text: 'Core Components', link: 'en/components/core' },
		{ text: 'Feature Components', link: 'en/components/feature' },
		{ text: 'Form Components', link: 'en/components/form' },
		{ text: 'Section Components', link: 'en/components/section' },
	],
};
