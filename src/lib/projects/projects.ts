import lino from '$lib/lino-sablay.svg';

export interface Project {
    tag: string;
    type: string;
    title: string;
    description: string;
    src: string;
    url: string;
}

export default [
    {
        tag: 'Service',
        type: 'Internal',
        title: 'Service Project',
        description: 'Lorep ipsum.',
        src: lino,
        url: '/projects/',
    },
] satisfies Project[];
