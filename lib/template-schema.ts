import { z } from "zod";

export const templateSchema = z.object({
  id: z.string(),
  name: z.string(),
  entry: z.string(),
  port: z.number(),
  runtime: z.string(),
  dockerImage: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
  version: z.string().optional(),
});

export const templatesSchema = z.array(templateSchema);

export type Template = z.infer<typeof templateSchema>;
