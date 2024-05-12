<script lang="ts">
    import githubIcon from "$lib/icons/github.svg";
    import linkedinIcon from "$lib/icons/linkedin.svg";
    import instagramIcon from "$lib/icons/instagram.svg";
    import linkIcon from "$lib/icons/link.svg";

    // eslint-disable-next-line init-declarations
    export let member: {
        name: string,
        title: string,
        committee: string,
        imgSrc: string,
        socials: { [social: string]: string | undefined }
    };

    const { name, title, imgSrc, socials } = member;

    let isOverlayVisible = false;

    function setOverlayVisibility(visibility: boolean) {
        isOverlayVisible = visibility;
    }

    function getSocialIcon(social: string) {
        switch (social) {
            case 'github':
                return githubIcon;
            case 'linkedin':
                return linkedinIcon;
            case 'instagram':
                return instagramIcon;
            default:
                return linkIcon;
        }
    }
</script>

<div
    class="group-hover:visible grid grid-cols-1 grid-rows-1 content-end items-end aspect-square overflow-hidden rounded-2xl bg-csi-neutral-50 shadow-lg dark:bg-csi-neutral-900"
    role="img"
    on:mouseenter={_ => setOverlayVisibility(true)}
    on:mouseleave={_ => setOverlayVisibility(false)}
>
    <img src={imgSrc + '?url'} alt="image of {name}" loading="lazy" class="m-0 col-start-1 row-start-1 object-cover" />
    {#if isOverlayVisible}
        <div class="z-10 col-start-1 row-start-1 h-full flex flex-col justify-end p-4 gap-2 text-csi-white bg-csi-black/80">
            <div>
                <p class="m-0 text-md md:text-lg">{name}</p>
                <p class="m-0 text-xs leading-tight">{title}</p>
            </div>
            <div class="flex flex-row gap-2">
                {#each Object.entries(socials) as [ social, href ]}
                    <a {href} target="_blank"><img class="m-0 w-5 h-5" src={getSocialIcon(social)} alt="{name}'s {social}" /></a>
                {/each}
            </div>
        </div>
    {:else}
        <div class="relative col-start-1 row-start-1">
            <div class="z-10 absolute left-2 bottom-2 w-fit h-fit py-1 px-4 rounded-full bg-csi-white">
                <p class="m-0 text-csi-black">{name}</p>
            </div>
        </div>
    {/if}
</div>
