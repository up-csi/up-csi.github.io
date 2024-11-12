import appProcess from '$lib/events/app-process.jpg';
import ascenc10n from '$lib/events/ascension.webp';
import ex2023 from '$lib/events/EX-series-2023.webp';
import innovcamp from '$lib/events/innovcamp.jpg';
import kopiKorner from '$lib/events/kopi-korner.png';
import mindfulness from '$lib/events/mindfulness.jpg';
import service101 from '$lib/events/service-101.png';
import teamBuilding from '$lib/events/team-building.jpg';

export interface Event {
    tag: string;
    state: string;
    type: string;
    event: string;
    dates: string;
    description: string;
    src: string;
    href: string;
}

export const enum Tag {
    All = 'All',
    EX = 'EX Series',
    App = 'App Process',
    GA = 'General Assembly',
    Partnership = 'Partnership',
    Workshop = 'Workshop',
    Other = 'Other',
}

export const enum State {
    Past = 'Past',
    Present = 'Ongoing',
    Future = 'Future',
}

export const enum Type {
    Internal = 'Internal',
    External = 'External',
}

export default [
    {
        tag: Tag.Other,
        state: State.Past,
        type: Type.Internal,
        event: 'Ascent: The 10th Anniversary',
        dates: 'August 4 - August 6, 2023',
        description:
            "UP CSI’s 10th anniversary was celebrated with a series of fun-filled activities, including a game night, an open-tambay day, and, all highlighting the organization's growth and bond over the years.",
        src: ascenc10n,
        href: '/events/',
    },
    {
        tag: Tag.EX,
        state: State.Past,
        type: Type.External,
        event: 'EX Series',
        dates: 'August 4 - August 6, 2023',
        description:
            'EX Series is an initiative of UP CSI that provides company talks and workshops which give students a glimpse of what work is like once they graduate.',
        src: ex2023,
        href: '/events/',
    },
    {
        tag: Tag.App,
        state: State.Present,
        type: Type.External,
        event: 'Application Process',
        dates: 'August 4 - August 6, 2023',
        description:
            'The application process serves as the recruitment phase of UP CSI. During this process, applicants undergo necessary training and development to prepare them for membership in the organization.',
        src: appProcess,
        href: '/events/',
    },
    {
        tag: Tag.Other,
        state: State.Past,
        type: Type.Internal,
        event: 'Team Building',
        dates: 'August 4 - August 6, 2023',
        description:
            "UP CSI's yearly team building aims to build rapport and strengthen the bond of the organizations’ members through fun activities and competition.",
        src: teamBuilding,
        href: '/events/',
    },
    {
        tag: Tag.Workshop,
        state: State.Past,
        type: Type.Internal,
        event: 'Kopi Korner',
        dates: 'August 4 - August 6, 2023',
        description:
            'Kopi Korner is a series of casual coffee conversations with different guests who share stories, knowledge, and advice about different topics to UP CSI members, applicants, and even alumni.',
        src: kopiKorner,
        href: '/events/',
    },
    {
        tag: Tag.Workshop,
        state: State.Past,
        type: Type.Internal,
        event: 'Service Project 101',
        dates: 'August 4 - August 6, 2023',
        description:
            'Service Project 101 is an internal workshop session tackling the ins and outs of UP CSI Service Projects, and how members can take part in them.',
        src: service101,
        href: '/events/',
    },
    {
        tag: Tag.Other,
        state: State.Past,
        type: Type.External,
        event: 'Mindfulness Caravan',
        dates: 'August 4 - August 6, 2023',
        description:
            'The Mindfulness Caravan is an event during CS week that gives DCS students and/or faculty a chance to destress and learn helpful mindfulness practices that can aid them in their life.',
        src: mindfulness,
        href: '/events/',
    },
    {
        tag: Tag.Workshop,
        state: State.Past,
        type: Type.External,
        event: 'InnovCamp',
        dates: 'August 4 - August 6, 2023',
        description:
            'Innovcamp is an event that aims to teach students how to ideate, design, and build their own ideas. InnovCamp also serves as foundation training for those eager to start their web development journey.',
        src: innovcamp,
        href: '/events/',
    },
] satisfies Event[];
