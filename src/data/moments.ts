import { getCollection } from "astro:content";

export async function getMoments() {
  const moments = await getCollection("moments", ({ data }) => !data.draft);
  return moments.sort(
    (a, b) =>
      b.data.datetime.localeCompare(a.data.datetime) || a.id.localeCompare(b.id)
  );
}
