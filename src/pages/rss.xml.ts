import { getCollection } from 'astro:content';

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char);

export async function GET({ site }: { site: URL }) {
  const base = import.meta.env.BASE_URL;
  const notes = (await getCollection('notes')).filter((note) => note.data.published && !note.data.demo).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const items = notes.map((note) => `
    <item>
      <title>${escapeXml(note.data.title)}</title>
      <description>${escapeXml(note.data.summary)}</description>
      <link>${new URL(`${base}notas/${note.id}/`, site).href}</link>
      <guid>${new URL(`${base}notas/${note.id}/`, site).href}</guid>
      <pubDate>${note.data.date.toUTCString()}</pubDate>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0"><channel>
    <title>Notas · Leo Thaylor</title>
    <link>${new URL(base, site).href}</link>
    <description>Hipóteses, perguntas e ideias.</description>
    <language>pt-BR</language>${items}
  </channel></rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
