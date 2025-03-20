import type { IconifyIcon } from '@iconify/svelte';

import GitHub from '@iconify/icons-simple-icons/github';
import Instagram from '@iconify/icons-simple-icons/instagram';
import Link from '@iconify/icons-heroicons/link-solid';
import LinkedIn from '@iconify/icons-simple-icons/linkedin';

interface SocialMedium {
    path: string,
    icon: IconifyIcon
}

const defaultSocialMedium: SocialMedium = {
    path: '',
    icon: Link
}

export const MemberSocialMedia: Record<string, SocialMedium> = {
    'github': {
        path: 'https://github.com',
        icon: GitHub
    }, 
    'linkedin': {
        path: 'https://www.linkedin.com/in',
        icon: LinkedIn
    },
    'instagram': {
        path: 'https://www.instagram.com',
        icon: Instagram
    }, 
    'website': defaultSocialMedium
} as const;

export function getSocialMedium(social: string) {
    return MemberSocialMedia[social] ? MemberSocialMedia[social] : defaultSocialMedium
}