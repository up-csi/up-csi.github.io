interface CommitteeInfo {
    color: string,
}

const defaultCommitteeInfo: CommitteeInfo = {
    color: 'bg-csi-blue'
}

export const MemberCommittees: Record<string, CommitteeInfo> = {
    'Executive': defaultCommitteeInfo,
    'Innovation': {
        color: 'bg-committees-innov'
    },
    'Service': {
        color: 'bg-committees-service'
    },
    'External Relations': {
        color: 'bg-committees-exte'
    },
    'Membership & Internals': {
        color: 'bg-committees-mni'
    },
    'Branding & Creatives': {
        color: 'bg-committees-bnc'
    },
    'Engineering': {
        color: 'bg-committees-engg'
    },
} as const;

export function getCommitteeInfo(committee: string) {
    return MemberCommittees[committee] ? MemberCommittees[committee] : defaultCommitteeInfo;   
}