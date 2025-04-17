import { type InferOutput, picklist } from "valibot";

export const POSITIONS = [
    'President',
    'Vice President for Innovation',
    'Vice President for Service',
    'Director for External Relations',
    'Director for Membership & Internals',
    'Director for Branding & Creatives',
    'Director for Engineering',
    '',
] as const;


export const Position = picklist(POSITIONS);

export type Position = InferOutput<typeof Position>;