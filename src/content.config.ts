import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    titleAccent: z.string().optional(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    readingTime: z.string().optional(),
    volume: z.string().default('Volume I'),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { posts };
