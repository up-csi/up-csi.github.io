<script>
    import darkmode from '$lib/icons/darkmode.svg';
    import { get } from '$lib/stores/color-scheme';
    import lightmode from '$lib/icons/lightmode.svg';
    import { scrollToFooter } from '$lib/utils/scrollUtils.js';
    import upcsi from '$lib/icons/upcsi.svg';

    let mobileMenu = false;
    const theme = get();

    function closeMenu() {
        mobileMenu = false;
    }
</script>

<nav class="flex items-center justify-center">
    <ul
        class="flex w-full flex-row items-center justify-between gap-4 bg-csi-neutral-50 p-1 text-csi-black shadow-md lg:w-fit lg:rounded-xl dark:bg-csi-neutral-950 dark:text-csi-white"
    >
        <li class="mx-6 sm:mx-10 lg:ml-8 lg:mr-4">
            <img src={upcsi} alt="UP CSI Logo" class="h-8 object-contain" />
        </li>
        <li class="hidden lg:block"><a href="/">Home</a></li>
        <li class="hidden lg:block"><a href="/about/">About</a></li>
        <li class="hidden lg:block"><a href="/people/">People</a></li>
        <li class="hidden lg:block"><a href="/events/">Events</a></li>
        <li class="hidden lg:block"><a href="/projects/">Projects</a></li>
        <li class="hidden lg:block">
            <button class="flex items-center justify-center" on:click={theme.toggle}
                ><img
                    src={darkmode}
                    alt="Toggle Dark Mode"
                    class="mx-4 h-6 object-contain dark:hidden"
                /></button
            >
            <button class="flex items-center justify-center" on:click={theme.toggle}
                ><img
                    src={lightmode}
                    alt="Toggle Light Mode"
                    class="mx-4 hidden h-6 object-contain dark:block"
                /></button
            >
        </li>
        <li class="hidden lg:block">
            <button
                on:click={scrollToFooter}
                class="rounded-lg bg-csi-blue px-5 py-2 text-csi-black">Get in Touch</button
            >
        </li>
        <li class="mx-6 my-2 flex flex-row items-center sm:mx-10 lg:hidden">
            <button class="flex items-center justify-center" on:click={theme.toggle}
                ><img
                    src={darkmode}
                    alt="Toggle Dark Mode"
                    class="mx-4 h-6 object-contain dark:hidden"
                /></button
            >
            <button class="flex items-center justify-center" on:click={theme.toggle}
                ><img
                    src={lightmode}
                    alt="Toggle Light Mode"
                    class="mx-4 hidden h-6 object-contain dark:block"
                /></button
            >
            <button
                class="rounded-lg bg-black px-5 py-2 text-csi-white"
                on:click={() => (mobileMenu = !mobileMenu)}>Get Started</button
            >
        </li>
    </ul>
</nav>
{#if mobileMenu}
    <div class="flex h-svh flex-col bg-blue-white dark:bg-black">
        <div class="fixed bottom-0 w-full space-y-4 pb-12">
            <ul class="w-full font-dm text-2xl text-csi-black dark:text-csi-white">
                <li class="m-4"><a href="/" on:click={closeMenu}>Home</a></li>
                <li class="m-4"><a href="/about" on:click={closeMenu}>About</a></li>
                <li class="m-4"><a href="/events/" on:click={closeMenu}>Events</a></li>
                <li class="m-4"><a href="/projects/" on:click={closeMenu}>Projects</a></li>
                <li class="m-4"><button on:click={closeMenu}>Get in Touch</button></li>
            </ul>
            <div class="flex w-full items-center justify-center">
                <button
                    class="rounded-full bg-csi-white/75 px-6 py-3 text-csi-black dark:bg-csi-neutral-600/75 dark:text-csi-white"
                    on:click={closeMenu}>Close</button
                >
            </div>
        </div>
    </div>
{/if}
