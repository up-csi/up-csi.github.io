interface CommitteeInfo {
    color: string;
    foreground: string;
}

const defaultCommitteeInfo: CommitteeInfo = {
    color: 'bg-csi-blue',
    foreground: 'text-csi-black',
};

export const MemberCommittees: Record<string, CommitteeInfo> = {
    Executive: defaultCommitteeInfo,
    Innovation: {
        color: 'bg-innov',
        foreground: 'text-csi-black',
    },
    Service: {
        color: 'bg-service',
        foreground: 'text-csi-black',
    },
    'External Relations': {
        color: 'bg-exte',
        foreground: 'text-csi-white',
    },
    'Membership & Internals': {
        color: 'bg-mni',
        foreground: 'text-csi-black',
    },
    'Branding & Creatives': {
        color: 'bg-bnc',
        foreground: 'text-csi-white',
    },
    Engineering: {
        color: 'bg-engg',
        foreground: 'text-csi-black',
    },
} as const;

export function getCommitteeInfo(committee: string) {
    return MemberCommittees[committee] ? MemberCommittees[committee] : defaultCommitteeInfo;
}
