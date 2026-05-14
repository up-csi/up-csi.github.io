import { parse, array } from 'valibot';

import { supabase } from '$lib/supabaseClient';

import { Project as ProjectSchema } from '$lib/models/project';

export async function getProjects() {
    const { data, error } = await supabase.from('projects').select(`
        name, tag, client, description,
        project_url, project_managers, devs, end_date, imgs, slug
    `);

    if (error) throw new Error('project data fetching error');

    const projects = parse(array(ProjectSchema), data);

    return projects;
}
