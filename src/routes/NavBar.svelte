<script>
    import { Bars3, Moon, Sun, XMark } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { fly } from 'svelte/transition';
    import { get } from '$lib/stores/color-scheme';
    import upcsi from '$lib/icons/upcsi.svg';

    let mobileMenu = false;
    const theme = get();

    function closeMenu() {
        mobileMenu = false;
    }
</script>

<div
    class="flex items-center justify-between rounded-full border-2 border-light-gray bg-csi-white/90 p-1 font-dm text-csi-black shadow-xl backdrop-blur-xl lg:mx-24 dark:border-dark-gray dark:bg-csi-black/90 dark:text-csi-white"
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
            on:click={theme.toggle}
        >
            <Icon src={Moon} size="18px" theme="solid" class="dark:hidden" />
            <Icon src={Sun} size="18px" theme="solid" class="hidden dark:block" />
        </button>
        <a
            href="mailto:lino@up-csi.org"
            class="hidden whitespace-nowrap rounded-full border-2 border-csi-blue px-4 py-1 transition-colors duration-300 hover:bg-csi-blue hover:shadow-inner lg:block"
        >
            Contact Us
        </a>

        <button
            class="rounded-full border border-csi-neutral-200 p-2 transition-colors duration-200 hover:bg-light-gray lg:hidden dark:border-csi-neutral-800 dark:hover:bg-dark-gray"
            on:click={() => (mobileMenu = !mobileMenu)}
        >
            {#if mobileMenu}
                <Icon src={XMark} theme="solid" class="hover:text-csi-blue" size="18px" />
            {:else}
                <Icon src={Bars3} theme="solid" size="18px" />
            {/if}
        </button>
    </div>
</div>
{#if mobileMenu}
    <div
        class="fixed inset-y-2 right-2 block h-[calc(100vh-1rem)] w-5/6 rounded-2xl bg-blue-white/95 font-dm text-xl backdrop-blur-2xl sm:w-3/4 sm:max-w-sm lg:hidden dark:bg-black/95 dark:text-csi-white"
        transition:fly={{ x: 300, duration: 150 }}
    >
        <div class="flex h-full flex-col items-end justify-between p-4">
            <div class="flex flex-col items-end">
                <button
                    class="p-1 pb-6 transition-colors duration-200 ease-in-out hover:text-csi-blue"
                    on:click={() => (mobileMenu = !mobileMenu)}
                >
                    <Icon src={XMark} theme="solid" size="24px" />
                </button>
                <ul
                    class="flex w-full flex-col items-end space-y-6 px-2 text-csi-black dark:text-csi-white"
                >
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/about/"
                            on:click={closeMenu}>About</a
                        >
                    </li>
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/people/"
                            on:click={closeMenu}>People</a
                        >
                    </li>
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/events/"
                            on:click={closeMenu}>Events</a
                        >
                    </li>
                    <li>
                        <a
                            class="transition-colors duration-300 ease-in-out hover:text-csi-blue"
                            href="/projects/"
                            on:click={closeMenu}>Projects</a
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
