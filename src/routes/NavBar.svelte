<script>
    import darkmode from '$lib/icons/darkmode.svg';
    import { get } from '$lib/stores/color-scheme';
    import lightmode from '$lib/icons/lightmode.svg';
    import upcsi from '$lib/icons/upcsi.svg';

    let mobileMenu = false;
    const theme = get();
</script>

<nav class="flex items-center justify-center bg-white dark:bg-black">
    <ul
        class="flex w-full flex-row items-center justify-between gap-4 bg-[#fcfdfd] p-1 lg:w-fit lg:rounded-xl dark:bg-[#0d0d0d]"
    >
        <li class="mx-6 sm:mx-10 lg:ml-8 lg:mr-4">
            <img src={upcsi} alt="UP CSI Logo" class="h-8 object-contain" />
        </li>
        <li class="hidden lg:block"><a href="/">Home</a></li>
        <li class="hidden lg:block"><a href="/about">About</a></li>
        <li class="hidden lg:block"><a href="/events/">Events</a></li>
        <li class="hidden lg:block"><a href="/">Projects</a></li>
        <li class="hidden lg:block"><a href="/news/">Newsletter</a></li>
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
            <button class="rounded-lg bg-csi-blue px-5 py-2">Get in Touch</button>
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
                on:click={() => (mobileMenu = true)}>Get Started</button
            >
        </li>
    </ul>
</nav>
{#if mobileMenu}
    <div class="flex h-svh flex-col bg-blue-white">
        <div class="fixed bottom-0 w-full space-y-4">
            <ul class="w-full font-dm text-2xl text-csi-black dark:text-csi-white">
                <li class="m-4"><a href="/">Home</a></li>
                <li class="m-4"><a href="/about">About</a></li>
                <li class="m-4"><a href="/events/">Events</a></li>
                <li class="m-4"><a href="/">Projects</a></li>
                <li class="m-4"><a href="/news/">Newsletter</a></li>
                <li class="m-4"><button>Get in Touch</button></li>
            </ul>
            <div class="flex w-full items-center justify-center">
                <button
                    class="rounded-full bg-[#eff5f7] px-6 py-3"
                    on:click={() => (mobileMenu = false)}>Close</button
                >
            </div>
        </div>
    </div>
{/if}
