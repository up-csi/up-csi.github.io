<script>
    import { darkMode } from '$lib/dark-mode';
    import darkmode from '$lib/icons/darkmode.svg';
    import lightmode from '$lib/icons/lightmode.svg';
    import upcsi from '$lib/icons/upcsi.svg';

    let mobileMenu = false;
</script>

<nav class="flex items-center justify-center">
    <ul
        class="flex w-full flex-row items-center justify-between gap-4 bg-[#fcfdfd] p-1 lg:w-fit lg:rounded-xl dark:bg-[#0d0d0d]"
    >
        <li class="mx-6 sm:mx-10 lg:ml-8 lg:mr-4">
            <img src={upcsi} alt="UP CSI Logo" class="h-8 object-contain" />
        </li>
        <li class="hidden lg:block">
            <a href="/" class="text-csi-black dark:text-csi-white">Home</a>
        </li>
        <li class="hidden lg:block">
            <a href="/#about" class="text-csi-black dark:text-csi-white">About</a>
        </li>
        <li class="hidden lg:block">
            <a href="/events/" class="text-csi-black dark:text-csi-white">Events</a>
        </li>
        <li class="hidden lg:block">
            <a href="/" class="text-csi-black dark:text-csi-white">Projects</a>
        </li>
        <li class="hidden lg:block">
            <a href="/news/" class="text-csi-black dark:text-csi-white">Newsletter</a>
        </li>
        <li class="hidden lg:block">
            <button
                class="flex items-center justify-center"
                on:click={() => {
                    darkMode.update(dm => (dm = !dm));
                }}
                ><img
                    src={darkmode}
                    alt="Toggle Dark Mode"
                    class="mx-4 h-6 object-contain dark:hidden"
                /></button
            >
            <button
                class="flex items-center justify-center"
                on:click={() => {
                    darkMode.update(dm => (dm = !dm));
                }}
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
            <button
                class="flex items-center justify-center"
                on:click={() => {
                    darkMode.update(dm => (dm = !dm));
                }}
                ><img
                    src={darkmode}
                    alt="Toggle Dark Mode"
                    class="mx-4 h-6 object-contain dark:hidden"
                /></button
            >
            <button
                class="flex items-center justify-center"
                on:click={() => {
                    darkMode.update(dm => (dm = !dm));
                }}
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
        <div class="fixed bottom-0 w-full">
            <ul class="w-full">
                <li class="m-4">
                    <a href="/" class="font-dm text-2xl text-csi-black dark:text-csi-white">Home</a>
                </li>
                <li class="m-4">
                    <a href="/#about" class="font-dm text-2xl text-csi-black dark:text-csi-white"
                        >About</a
                    >
                </li>
                <li class="m-4">
                    <a href="/events/" class="font-dm text-2xl text-csi-black dark:text-csi-white"
                        >Events</a
                    >
                </li>
                <li class="m-4">
                    <a href="/" class="font-dm text-2xl text-csi-black dark:text-csi-white"
                        >Projects</a
                    >
                </li>
                <li class="m-4">
                    <a href="/news/" class="font-dm text-2xl text-csi-black dark:text-csi-white"
                        >Newsletter</a
                    >
                </li>
                <li class="m-4">
                    <button class="font-dm text-2xl text-csi-black dark:text-csi-white"
                        >Get in Touch</button
                    >
                </li>
            </ul>
            <div class="my-4 flex w-full items-center justify-center">
                <button
                    class="rounded-full bg-[#eff5f7] px-6 py-3"
                    on:click={() => (mobileMenu = false)}>Close</button
                >
            </div>
        </div>
    </div>
{/if}
