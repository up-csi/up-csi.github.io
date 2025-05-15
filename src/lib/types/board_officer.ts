import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import type { Position } from '$lib/models/position';

export interface BoardOfficer {
    name: string;
    src: EnhancedImgAttributes['src'];
    title: Position[];
}
