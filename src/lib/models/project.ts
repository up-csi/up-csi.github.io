import {
    type InferOutput,
    array,
    nullable,
    object,
    optional,
    picklist,
    pipe,
    string,
    transform,
} from 'valibot';

export const TAGS = ['Service', 'Innovation'] as const;

export const Project = object({
    tag: picklist(TAGS),
    name: string(),
    client: nullable(string()),
    description: nullable(string()),
    project_url: nullable(string()),
    project_managers: optional(array(string())),
    devs: optional(array(string())),
    end_date: nullable(pipe(string(), transform(Date))),
    slug: string(),
    imgs: nullable(array(string())),
});

export type Project = InferOutput<typeof Project>;
