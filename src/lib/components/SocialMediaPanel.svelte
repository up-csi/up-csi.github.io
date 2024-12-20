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

<div class="flex w-fit flex-col">
    <div
        class="w-lg w-fit rounded-t-2xl bg-csi-neutral-50 p-2 px-5 text-center text-lg
        font-semibold dark:bg-csi-neutral-800 dark:text-csi-white"
    >
        Social Media
    </div>
    <div
        class="flex flex-row rounded-2xl rounded-tl-none bg-csi-neutral-50 shadow-lg dark:bg-csi-neutral-800"
    >
        {#each socials as { icon, href }}
            <a {href} target="_blank"
                ><Icon
                    {icon}
                    class="m-5 size-20 text-csi-black transition-colors hover:text-csi-blue md:text-csi-black
                dark:text-csi-white"
                /></a
            >
        {/each}
    </div>
</div>
