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

<div class="prose flex flex-col">
    <div
        class="bg-float hidden w-fit rounded-t-2xl px-4 pt-1.5 text-center font-semibold md:block"
    >
        Social Media
    </div>
    <div
        class="md:bg-float flex flex-row space-x-8 rounded-2xl rounded-tl-none bg-none p-5 md:shadow-lg"
    >
        {#each socials as { icon, href }}
            <a {href} target="_blank">
                <Icon {icon} class="size-14 md:size-16 text-float-foreground" />
            </a>
        {/each}
    </div>
</div>
