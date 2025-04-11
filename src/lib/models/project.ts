import { type InferOutput, array, object, optional, picklist, string } from "valibot";

export const TAGS = ['Service', 'Innovation'] as const;

export const Project = object({
    tag: picklist(TAGS),
    name: string(),
    client: optional(string()),
    description: optional(string()),
    link: optional(string()),
    proponents: optional(object({
        pm: optional(array(string())),
        devs: optional(array(string()))
    })),
    end_date: optional(string()),
    slug: string()
});

export interface Project extends InferOutput<typeof Project> {
    parsed_end_date: Date | null;
}