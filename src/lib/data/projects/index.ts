import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import { parse } from 'valibot';

import { type Project, Project as ProjectSchema } from '$lib/models/project';

export async function getProjects() {
    const imports = import.meta.glob<Project>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const project = parse(ProjectSchema, await asset());

        const imgs: EnhancedImgAttributes['src'][] = [];
        for (let i = 0; i < 5; i++) {
            try {
                imgs.push(
                    (await import(`$lib/assets/events/${project.slug}/${i}.webp?enhanced?url`))
                        .default,
                );
            } catch {
                break;
            }
        }

        const parsed_project: Project = { ...project, imgs };
        return parsed_project;
    });

    return await Promise.all(promises);
}
