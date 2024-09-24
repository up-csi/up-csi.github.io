import type { Member } from './TeamPanel.svelte';

import caleb from '$lib/people/caleb-bunye.webp';

const enum Committee {
    Executive = 'Executive Board',
    Innovation = 'Innovation',
    Service = 'Service',
    External = 'External Relations',
    Membership = 'Membership & Internals',
    Branding = 'Branding & Creatives',
    Engineering = 'Engineering',
}

const team: Member[] = [
    {
        name: 'Caleb Bunye',
        title: 'President',
        committee: Committee.Executive,
        img: caleb,
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
            website: 'https://google.com',
        },
    },
    {
        name: 'Caleb Bunye 2',
        title: 'President',
        committee: Committee.Innovation,
        img: caleb,
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
            website: 'https://google.com',
        },
    },
    {
        name: 'Caleb Bunye 3',
        title: 'President',
        committee: Committee.Service,
        img: caleb,
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            website: 'https://google.com',
        },
    },
    {
        name: 'Caleb Bunye 4',
        title: 'President',
        committee: Committee.External,
        img: caleb,
        socials: {
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
            website: 'https://google.com',
        },
    },
    {
        name: 'Caleb Bunye 5',
        title: 'President',
        committee: Committee.Membership,
        img: caleb,
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
    },
    {
        name: 'Caleb Bunye 6',
        title: 'President',
        committee: Committee.Branding,
        img: caleb,
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
    },
    {
        name: 'Caleb Bunye 7',
        title: 'President',
        committee: Committee.Engineering,
        img: caleb,
        socials: {
            github: 'https://github.com',
            instagram: 'https://instagram.com',
            website: 'https://google.com',
        },
    },
    {
        name: 'Caleb Bunye 8',
        title: 'President',
        committee: Committee.Executive,
        img: caleb,
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
    },
];

export default team;
