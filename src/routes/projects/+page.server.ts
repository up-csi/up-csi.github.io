import { getProjects } from "$lib/data/projects";

export async function load() {
    return { projects: await getProjects() }
}