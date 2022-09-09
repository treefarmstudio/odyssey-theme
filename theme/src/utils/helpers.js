export function generateSlug(string) {
	return string
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export function generateTagData(categories) {
	let categoryData = [];
	categories.forEach(category => {
		categoryData.push({
			title: category,
			slug: `${generateSlug(category)}`,
		});
	});
	return categoryData;
}
