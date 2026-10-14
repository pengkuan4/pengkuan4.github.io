import { getCollection } from "astro:content";

export async function getNotes() {
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  return notes.sort(
    (a, b) =>
      b.data.datetime.localeCompare(a.data.datetime) || a.id.localeCompare(b.id)
  );
}
