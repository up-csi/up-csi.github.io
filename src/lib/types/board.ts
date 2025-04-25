import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import type { BoardOfficer } from '$lib/types/board_officer';

export interface Board {
    term: string;
    src: EnhancedImgAttributes['src'] | null;
    officers: BoardOfficer[];
}
