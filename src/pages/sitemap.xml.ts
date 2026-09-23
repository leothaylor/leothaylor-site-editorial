import { getCollection } from 'astro:content';

export async function GET({ site }: { site: URL }) {
  const base = import.meta.env.BASE_URL;
  const projects = await getCollection('projects');
  const notes = await getCollection('notes');
  const paths = [
    base,
    `${base}projetos/`,
    `${base}notas/`,
    `${base}notas/propostas-melhoria-aps/`,
    `${base}notas/propostas-melhoria-aps/caderneta-gestante/`,
    `${base}notas/propostas-melhoria-aps/projeto-asta/`,
    `${base}notas/propostas-melhoria-aps/pre-natal-nutricao/`,
    ...projects.map((project) => `${base}projetos/${project.id}/`),
    ...notes.map((note) => `${base}notas/${note.id}/`)
  ];
  const urls = paths.map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
