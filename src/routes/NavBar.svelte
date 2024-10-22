<script>
    import Icon from '@iconify/svelte';

    import Bars3 from '@iconify/icons-heroicons/bars-3-solid';
    import Moon from '@iconify/icons-heroicons/moon-solid';
    import Sun from '@iconify/icons-heroicons/sun-solid';
    import XMark from '@iconify/icons-heroicons/x-mark-solid';

    import { fly } from 'svelte/transition';
    import { get } from '$lib/stores/color-scheme';
    import upcsi from '$lib/icons/upcsi.svg';

    const theme = get();
    let mobileMenu = $state(false);

    function closeMenu() {
        mobileMenu = false;
    }
</script>

<div
    class="flex items-center justify-between rounded-full border-2 border-light-gray bg-csi-white/90 p-1 font-dm text-csi-black shadow-lg backdrop-blur-xl lg:mx-24 dark:border-dark-gray dark:bg-csi-black/90 dark:text-csi-white"
>
    <a class="flex items-center px-2" href="/">
        <div class="mx-1 h-6 w-6">
            <img src={upcsi} alt="UP CSI Logo" class="h-full w-full" />
        </div>
        <p class="text-nowrap text-xl font-bold tracking-tight text-csi-blue">UP CSI</p>
    </a>
    <nav class="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <ul class="flex items-center gap-8">
            <li>
                <a
                    class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                    href="/about/">About</a
                >
            </li>
            <li>
                <a
                    class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                    href="/people/">People</a
                >
            </li>
            <li>
                <a
                    class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                    href="/events/">Events</a
                >
            </li>
            <li>
                <a
                    class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                    href="/projects/">Projects</a
                >
            </li>
        </ul>
    </nav>
    <div class="flex items-center gap-2">
        <button
            class="rounded-full border border-csi-neutral-200 p-2 transition-colors duration-200 hover:bg-light-gray hover:shadow-inner dark:border-csi-neutral-800 dark:hover:bg-dark-gray"
            onclick={theme.toggle}
        >
            <Icon icon={Moon} width="18" height="18" class="dark:hidden" />
            <Icon icon={Sun} width="18" height="18" class="hidden dark:block" />
        </button>
        <a
            href="mailto:lino@up-csi.org"
            class="hidden whitespace-nowrap rounded-full border-2 border-csi-blue px-4 py-1 transition-colors duration-300 hover:bg-csi-blue hover:shadow-inner lg:block"
        >
            Contact Us
        </a>

        <button
            class="rounded-full border border-csi-neutral-200 p-2 transition-colors duration-200 hover:bg-light-gray lg:hidden dark:border-csi-neutral-800 dark:hover:bg-dark-gray"
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
        class="fixed inset-2 block rounded-2xl bg-blue-white/95 font-dm text-xl backdrop-blur-2xl sm:left-auto sm:w-3/4 sm:max-w-sm lg:hidden dark:bg-black/95 dark:text-csi-white"
        transition:fly={{ x: 300, duration: 150 }}
    >
        <div class="flex h-full flex-col items-end justify-between p-4">
            <div class="flex flex-col items-end">
                <button
                    class="p-1 pb-6 transition-colors duration-200 ease-in-out hover:text-csi-blue"
                    onclick={() => (mobileMenu = !mobileMenu)}
                >
                    <Icon icon={XMark} width="18" height="18" />
                </button>
                <ul
                    class="flex w-full flex-col items-end space-y-6 px-2 text-csi-black dark:text-csi-white"
                >
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/about/"
                            onclick={closeMenu}>About</a
                        >
                    </li>
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/people/"
                            onclick={closeMenu}>People</a
                        >
                    </li>
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/events/"
                            onclick={closeMenu}>Events</a
                        >
                    </li>
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/projects/"
                            onclick={closeMenu}>Projects</a
                        >
                    </li>
                </ul>
            </div>
            <a
                href="mailto:lino@up-csi.org"
                class="w-full whitespace-nowrap rounded-full border-2 border-csi-blue px-4 py-1 text-center transition-colors duration-300 hover:bg-csi-blue hover:shadow-inner"
            >
                Contact Us
            </a>
        </div>
    </div>
{/if}
