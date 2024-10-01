<script>
    import { Moon, Sun, Bars3, XMark } from '@steeze-ui/heroicons';
    import { Icon } from '@steeze-ui/svelte-icon';
    import { get } from '$lib/stores/color-scheme';
    import upcsi from '$lib/icons/upcsi.svg';

    let mobileMenu = false;
    const theme = get();

    function closeMenu() {
        mobileMenu = false;
    }

</script>

<div
    class="flex w-full items-center justify-between p-5 font-dm text-csi-neutral-500 shadow-md dark:text-csi-neutral-300"
>
    <nav class="flex w-full pl-3 sm:pl-6 xl:pl-32">
        <ul class="flex w-full flex-row items-center justify-between gap-10 p-1 lg:w-fit">
            <li class="flex flex-row items-center">
                <a class="flex flex-row items-center" href="/">
                    <img src={upcsi} alt="UP CSI Logo" class="h-8 object-contain" />
                    <p class=" pl-3 text-lg font-bold text-csi-blue">UP CSI</p>
                </a>
            </li>
            <li>
                <a
                    class="hidden transition-colors duration-300 ease-in-out hover:text-csi-blue lg:block"
                    href="/about/">About</a
                >
            </li>
            <li>
                <a
                    class="hidden transition-colors duration-300 ease-in-out hover:text-csi-blue lg:block"
                    href="/people/">People</a
                >
            </li>
            <li>
                <a
                    class="hidden transition-colors duration-300 ease-in-out hover:text-csi-blue lg:block"
                    href="/events/">Events</a
                >
            </li>
            <li>
                <a
                    class="hidden transition-colors duration-300 ease-in-out hover:text-csi-blue lg:block"
                    href="/projects/">Projects</a
                >
            </li>
        </ul>
    </nav>
    <div class="flex flex-row items-center gap-3 pr-1 sm:pr-4 xl:pr-32">
        <a
            href="mailto:lino@up-csi.org"
            class="hidden whitespace-nowrap rounded-lg bg-csi-blue px-5 py-2 text-csi-white ring-csi-blue transition-colors duration-300 hover:bg-blue-white hover:text-csi-neutral-900 hover:shadow-inner hover:ring-2 lg:block dark:text-csi-black dark:hover:bg-black dark:hover:text-csi-white"
        >
            Contact Us
        </a>
        <button
            class="rounded-xl border border-csi-neutral-200 p-2 transition-colors duration-200 hover:bg-csi-neutral-200 hover:shadow-inner lg:mx-2 lg:block dark:border-csi-neutral-800 dark:hover:bg-csi-neutral-800"
            on:click={theme.toggle}
        >
            <Icon src={Moon} size="24px" theme="solid" class="dark:hidden " />
            <Icon src={Sun} size="24px" theme="solid" class="hidden dark:block" />
        </button>
        <button
            class="mx-2 block rounded-xl border border-csi-neutral-200 p-2 py-2 transition-colors duration-200 hover:bg-csi-neutral-200 hover:text-csi-blue lg:hidden dark:border-csi-neutral-800 dark:hover:bg-csi-neutral-800"
            on:click={() => (mobileMenu = !mobileMenu)}
        >
            {#if mobileMenu}
                <Icon src={XMark} theme="solid" size="24px" />
            {:else}
                <Icon src={Bars3} theme="solid" size="24px" />
            {/if}
        </button>
    </div>
</div>
{#if mobileMenu}
    <div
        class="fixed right-0 top-0 block h-screen w-3/4 max-w-sm bg-blue-white lg:hidden dark:bg-black"
    >
        <div class="flex h-full flex-col items-end justify-between p-8">
            <div class="flex flex-col items-end">
                <button
                    class="mx-2 block p-2 pb-6 transition-colors duration-200 ease-in-out
                    hover:text-csi-blue dark:text-csi-white"
                    on:click={() => (mobileMenu = !mobileMenu)}
                >
                    <Icon src={XMark} theme="solid" size="24px" />
                </button>
                <ul
                    class="flex w-full flex-col items-end space-y-6 px-4
                    font-dm text-xl text-csi-black dark:text-csi-white"
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
                class="w-full whitespace-nowrap rounded-lg bg-csi-blue px-5 py-2 text-center text-csi-white ring-csi-blue transition-colors duration-300 hover:bg-blue-white hover:text-csi-neutral-900 hover:shadow-inner hover:ring-2 lg:block dark:text-csi-black dark:hover:bg-black dark:hover:text-csi-white"
            >
                Contact Us
            </a>
        </div>
    </div>
{/if}
