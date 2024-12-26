import lino from '$lib/lino-sablay.svg';

export interface Project {
    tag: string;
    project: string;
    description: string;
    src?: string;
}

export default [
    {
        tag: 'Service',
        project: 'Service Project',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        src: lino,
    },
    {
        tag: 'Innovation',
        project: 'Innovcamp',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        src: lino,
    },
    {
        tag: 'Innovation',
        project: 'Kopi Korner',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
] satisfies Project[];
