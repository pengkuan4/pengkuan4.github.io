import { defineCollection } from "astro:content";
import { glob, type Loader } from "astro/loaders";
import { z } from "astro/zod";

function localMarkdown(base: string): Loader {
  const loader = glob({ pattern: "*.md", base });
  return {
    ...loader,
    async load(context) {
      // The glob loader returns early for empty folders, leaving cached entries.
      context.store.clear();
      await loader.load(context);
    },
  };
}

const mediaSource = z.union([
  z.string().startsWith("/media/"),
  z.url({ protocol: /^https$/ }),
]);

const notes = defineCollection({
  loader: localMarkdown("./src/content/notes"),
  schema: z.object({
    title: z.string().trim().min(1),
    datetime: z.iso.date(),
    date: z.string().optional(),
    category: z.enum(["随笔", "技术"]).default("随笔"),
    excerpt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const moments = defineCollection({
  loader: localMarkdown("./src/content/moments"),
  schema: z.discriminatedUnion("type", [
    z.object({
      type: z.literal("image"),
      src: mediaSource,
      alt: z.string().trim().min(1),
      datetime: z.iso.date(),
      draft: z.boolean().default(false),
    }),
    z.object({
      type: z.literal("video"),
      src: mediaSource,
      title: z.string().trim().min(1),
      poster: mediaSource.optional(),
      datetime: z.iso.date(),
      draft: z.boolean().default(false),
    }),
  ]),
});

export const collections = { notes, moments };
