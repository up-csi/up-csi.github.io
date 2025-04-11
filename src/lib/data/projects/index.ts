import { parse } from 'valibot';

import { type Project, Project as ProjectSchema } from '$lib/models/project';

export async function getProjects() {
    const imports = import.meta.glob<Project>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const project = parse(ProjectSchema, await asset());
        const end_date = project.end_date;
        const parsed_end_date = (end_date) ? new Date(end_date) : null;

        const parsed_project: Project = { ...project, parsed_end_date }
        return parsed_project;
    });

    return await Promise.all(promises);
}