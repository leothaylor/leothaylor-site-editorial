import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mediaItem = z.object({
  url: z.url(),
  alt: z.string(),
  caption: z.string().optional(),
  fit: z.enum(['cover', 'contain']).default('cover')
});

const metricItem = z.object({
  value: z.string(),
  label: z.string()
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    status: z.string(),
    year: z.string(),
    role: z.string(),
    proof: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    liveUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    tags: z.array(z.string()).default([]),
    accent: z.string().default('#A2AD87'),
    accent2: z.string().default('#C8A93A'),
    surface: z.string().default('#2B322C'),
    ink: z.string().default('#EFEEE8'),
    media: z.array(mediaItem).default([]),
    metrics: z.array(metricItem).default([])
  })
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    order: z.number().default(99),
    published: z.boolean().default(false),
    demo: z.boolean().default(false),
    placeholderImage: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    provenance: z.string().optional()
  })
});

export const collections = { projects, notes };
