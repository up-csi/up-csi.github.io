<script lang="ts">
    import Icon from '@iconify/svelte';

    import Facebook from '@iconify/icons-simple-icons/facebook';
    import GitHub from '@iconify/icons-simple-icons/github';
    import LinkedIn from '@iconify/icons-simple-icons/linkedin';
    import Twitter from '@iconify/icons-simple-icons/twitter';

    const socials = [
        {
            icon: Facebook,
            href: 'https://www.facebook.com/upcsi',
        },
        {
            icon: Twitter,
            href: 'https://twitter.com/officialupcsi',
        },
        {
            icon: LinkedIn,
            href: 'https://www.linkedin.com/company/up-center-for-student-innovations/',
        },
        {
            icon: GitHub,
            href: 'https://github.com/up-csi',
        },
    ];
</script>

<div class="flex w-fit flex-col text-csi-black dark:text-csi-white">
    <div
        class="hidden w-fit rounded-t-2xl bg-csi-neutral-50 px-4 pt-1.5 text-center font-semibold md:block dark:bg-csi-neutral-800 dark:text-csi-white"
    >
        Social Media
    </div>
    <div
        class="flex flex-row space-x-8 rounded-2xl rounded-tl-none bg-none p-5 md:bg-csi-neutral-50 md:shadow-lg dark:md:bg-csi-neutral-800"
    >
        {#each socials as { icon, href }}
            <a {href} target="_blank">
                <Icon {icon} class="size-14 text-csi-black md:size-16 dark:text-csi-white" />
            </a>
        {/each}
    </div>
</div>
