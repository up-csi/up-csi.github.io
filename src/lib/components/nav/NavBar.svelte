<script>
    import Icon from '@iconify/svelte';

    import Bars3 from '@iconify/icons-heroicons/bars-3-solid';
    import Moon from '@iconify/icons-heroicons/moon-solid';
    import Sun from '@iconify/icons-heroicons/sun-solid';
    import XMark from '@iconify/icons-heroicons/x-mark-solid';

    import { fly } from 'svelte/transition';
    import { get } from '$lib/stores/color-scheme';
    import upcsi from '$lib/assets/icons/upcsi.svg';

    import LinkButtonNavBar from '$lib/components/buttons/LinkButtonNavBar.svelte';

    const theme = get();
    let mobileMenu = $state(false);

    function closeMenu() {
        mobileMenu = false;
    }
</script>

<div
    class="border-light-gray bg-csi-white/90 font-dm text-csi-black dark:border-dark-gray dark:bg-csi-black/90 dark:text-csi-white flex items-center justify-between rounded-full border-2 p-1 shadow-lg backdrop-blur-xl transition-colors ease-in-out lg:mx-24"
>
    <a class="flex items-center px-2" href="/">
        <div class="mx-1 h-6 w-6">
            <img src={upcsi} alt="UP CSI Logo" class="h-full w-full" />
        </div>
        <p class="text-csi-blue text-xl font-bold tracking-tight text-nowrap">UP CSI</p>
    </a>
    <nav class="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <ul class="flex items-center gap-8">
            <li>
                <a class="hover:text-csi-blue transition-colors ease-in-out" href="/about/">About</a
                >
            </li>
            <li>
                <a class="hover:text-csi-blue transition-colors ease-in-out" href="/people/"
                    >People</a
                >
            </li>
            <li>
                <a class="hover:text-csi-blue transition-colors ease-in-out" href="/events/"
                    >Events</a
                >
            </li>
            <li>
                <a class="hover:text-csi-blue transition-colors ease-in-out" href="/projects/"
                    >Projects</a
                >
            </li>
        </ul>
    </nav>
    <div class="flex items-center gap-2">
        <button
            class="border-csi-neutral-200 hover:bg-light-gray dark:border-csi-neutral-800 dark:hover:bg-dark-gray rounded-full border p-2 transition-colors hover:shadow-inner"
            onclick={theme.toggle}
        >
            <Icon icon={Moon} width="18" height="18" class="dark:hidden" />
            <Icon icon={Sun} width="18" height="18" class="hidden dark:block" />
        </button>
        <LinkButtonNavBar href="mailto:lino@up-csi.org">Contact Us</LinkButtonNavBar>

        <button
            class="border-csi-neutral-200 hover:bg-light-gray dark:border-csi-neutral-800 dark:hover:bg-dark-gray rounded-full border p-2 transition-colors lg:hidden"
            onclick={() => (mobileMenu = !mobileMenu)}
        >
            {#if mobileMenu}
                <Icon icon={XMark} width="18" height="18" class="hover:text-csi-blue" />
            {:else}
                <Icon icon={Bars3} width="18" height="18" />
            {/if}
        </button>
    </div>
</div>
{#if mobileMenu}
    <div
        class="bg-blue-white/95 font-dm dark:text-csi-white fixed inset-2 block rounded-2xl text-xl backdrop-blur-2xl sm:left-auto sm:w-3/4 sm:max-w-sm lg:hidden dark:bg-black/95"
        transition:fly={{ x: 300, duration: 150 }}
    >
        <div class="flex h-full flex-col items-end justify-between p-4">
            <div class="flex flex-col items-end">
                <button
                    class="hover:text-csi-blue p-1 pb-6 transition-colors ease-in-out"
                    onclick={() => (mobileMenu = !mobileMenu)}
                >
                    <Icon icon={XMark} width="18" height="18" />
                </button>
                <ul
                    class="text-csi-black dark:text-csi-white flex w-full flex-col items-end space-y-6 px-2"
                >
                    <li>
                        <a
                            class="hover:text-csi-blue transition-colors ease-in-out"
                            href="/about/"
                            onclick={closeMenu}>About</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:text-csi-blue transition-colors ease-in-out"
                            href="/people/"
                            onclick={closeMenu}>People</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:text-csi-blue transition-colors ease-in-out"
                            href="/events/"
                            onclick={closeMenu}>Events</a
                        >
                    </li>
                    <li>
                        <a
                            class="hover:text-csi-blue transition-colors ease-in-out"
                            href="/projects/"
                            onclick={closeMenu}>Projects</a
                        >
                    </li>
                </ul>
            </div>
            <LinkButtonNavBar href="mailto:lino@up-csi.org">Contact Us</LinkButtonNavBar>
        </div>
    </div>
{/if}
