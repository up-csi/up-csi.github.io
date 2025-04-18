import ascenc10n from '$lib/assets/events/ascension.webp';
import bootcamp10 from '$lib/assets/events/bootcamp-10.webp';
import csflight from '$lib/assets/events/csflight.webp';
import ex2023 from '$lib/assets/events/EX-series-2023.webp';
import firstGa2023 from '$lib/assets/events/first-GA-2324B.webp';
import gitWorkshop from '$lib/assets/events/git-workshop.webp';
import pyrolympics from '$lib/assets/events/pyrolympics.webp';
import yearEndGa2023 from '$lib/assets/events/year-end-GA-2023.webp';

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
        event: 'ASCENS10N',
        dates: 'August 4 - August 6, 2023',
        description:
            'On its tenth year, UP CSI celebrates a decade of innovation and excellence with its members and alumni who became a part of this incredible journey.',
        src: ascenc10n,
        href: '/events/',
    },
    {
        tag: Tag.EX,
        state: State.Past,
        type: Type.External,
        event: 'EX Series 2023',
        dates: 'August 4 - August 6, 2023',
        description:
            'Aute incididunt officia exercitation ea aliqua officia culpa incididunt proident aliqua commodo velit.',
        src: ex2023,
        href: '/events/',
    },
    {
        tag: Tag.App,
        state: State.Past,
        type: Type.Internal,
        event: 'CSFlight',
        dates: 'August 4 - August 6, 2023',
        description:
            'Qui eu voluptate non nostrud. Et irure reprehenderit pariatur nulla laboris ipsum ut tempor magna officia tempor mollit Lorem reprehenderit.',
        src: csflight,
        href: '/events/',
    },
    {
        tag: Tag.Partnership,
        state: State.Past,
        type: Type.External,
        event: 'Bootcamp 10.0',
        dates: 'August 4 - August 6, 2023',
        description: 'Nisi consequat consequat nisi ipsum. Ut dolore dolore officia ea ipsum.',
        src: bootcamp10,
        href: '/events/',
    },
    {
        tag: Tag.Partnership,
        state: State.Past,
        type: Type.External,
        event: 'Git Workshop',
        dates: 'August 4 - August 6, 2023',
        description:
            'Laboris ullamco do occaecat nostrud nisi irure. Ullamco nulla duis elit fugiat anim sint.',
        src: gitWorkshop,
        href: '/events/',
    },
    {
        tag: Tag.GA,
        state: State.Past,
        type: Type.Internal,
        event: 'Year-end General Assembly 2023',
        dates: 'August 4 - August 6, 2023',
        description: 'Proident in aliqua proident quis ex ad excepteur culpa sunt.',
        src: yearEndGa2023,
        href: '/events/',
    },
    {
        tag: Tag.App,
        state: State.Past,
        type: Type.Internal,
        event: 'Pyrolympics',
        dates: 'August 4 - August 6, 2023',
        description:
            'Elit irure elit adipisicing consectetur nisi laborum mollit esse eu dolore nostrud laborum laborum. Excepteur nulla velit aliquip eiusmod duis.',
        src: pyrolympics,
        href: '/events/',
    },
    {
        tag: Tag.GA,
        state: State.Past,
        type: Type.Internal,
        event: 'First GA 2324B',
        dates: 'August 4 - August 6, 2023',
        description:
            'Culpa consectetur enim fugiat in labore laborum et adipisicing Lorem. Enim mollit excepteur est ea nulla in nulla dolor et.',
        src: firstGa2023,
        href: '/events/',
    },
] satisfies Event[];
