import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		author: z.string().default('Info-Eng Tutor'),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};
