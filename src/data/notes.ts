export type ThoughtNote = {
  slug: string;
  title: string;
  date: string;
  datetime: string;
  mood: string;
  excerpt: string;
  tags: string[];
  body: string[];
};

type NoteFrontmatter = Omit<ThoughtNote, "body" | "slug"> & {
  slug?: string;
};

const rawNoteModules = import.meta.glob("../content/notes/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const stripQuotes = (value: string) =>
  value
    .replace(/^["']|["']$/g, "")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");

const parseValue = (value: string): string | string[] => {
  const trimmed = value.trim();

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);
      return Array.isArray(parsed) ? parsed.map(String) : [];
    } catch {
      return [];
    }
  }

  return stripQuotes(trimmed);
};

const parseFrontmatter = (source: string, path: string) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`Missing frontmatter in ${path}`);
  }

  const data = match[1]
    .split(/\r?\n/)
    .map(line => line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/))
    .filter((line): line is RegExpMatchArray => Boolean(line))
    .reduce<Record<string, string | string[]>>((acc, line) => {
      acc[line[1]] = parseValue(line[2]);
      return acc;
    }, {});

  return {
    body: match[2].trim(),
    data: data as Partial<NoteFrontmatter>,
  };
};

const slugFromPath = (path: string) =>
  path.split("/").pop()?.replace(/\.md$/, "") ?? "";

export const notes: ThoughtNote[] = Object.entries(rawNoteModules)
  .map(([path, source]) => {
    const { body, data } = parseFrontmatter(source, path);
    const slug = data.slug ?? slugFromPath(path);
    const paragraphs = body
      .split(/\r?\n\s*\r?\n/)
      .map(paragraph => paragraph.replace(/\s*\r?\n\s*/g, " ").trim())
      .filter(Boolean);

    if (
      !slug ||
      !data.title ||
      !data.date ||
      !data.datetime ||
      !data.mood ||
      !data.excerpt
    ) {
      throw new Error(`Invalid note frontmatter in ${path}`);
    }

    return {
      slug,
      title: data.title,
      date: data.date,
      datetime: data.datetime,
      mood: data.mood,
      excerpt: data.excerpt,
      tags: Array.isArray(data.tags) ? data.tags : [],
      body: paragraphs.length > 0 ? paragraphs : [data.excerpt],
    };
  })
  .sort((a, b) => b.datetime.localeCompare(a.datetime));

export const latestNotes = notes.slice(0, 3);
