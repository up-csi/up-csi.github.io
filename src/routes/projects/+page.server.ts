import { type Project, TAGS as projectTags } from '$lib/models/project';

import { getProjects } from "$lib/data/projects";

export async function load() {
    const projects = await getProjects();

    const filteredProjects: Record<string, Project[]> = {};
    projectTags.forEach(projectTag => {
        filteredProjects[projectTag] = projects.filter(({ tag }) => { return tag === projectTag });
    });

    return { projects, filteredProjects }
}