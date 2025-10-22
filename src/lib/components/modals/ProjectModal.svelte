<script lang="ts">
    import CloseIcon from '@iconify/icons-heroicons/x-mark';
    import Icon from '@iconify/svelte';

    import { scale } from 'svelte/transition';

    import placeholder from '$lib/assets/lino/lino-sablay.svg';

    // eslint-disable-next-line prefer-const
    let { showModal = $bindable(), currentItem } = $props();

    let dialogRef: HTMLDialogElement | undefined = $state();

    $effect(() => {
        if (dialogRef) {
            if (showModal && !dialogRef.open) {
                dialogRef.showModal();
            }
        }
    });

    function requestDialogClose() {
        showModal = false;
    }

    function handleNativeDialogClose() {
        if (showModal) {
            showModal = false;
        }
    }

    function handleDialogCancel(item: Event) {
        item.preventDefault();
        requestDialogClose();
    }

    function handleBackdropClick(item: Event) {
        if (item.target === dialogRef) {
            requestDialogClose();
        }
    }
</script>

{#if showModal}
    <dialog
        bind:this={dialogRef}
        onclose={handleNativeDialogClose}
        oncancel={handleDialogCancel}
        onmousedown={handleBackdropClick}
        class="font-dm shadow-csi-blue text-foreground bg-background mx-auto my-auto h-4/5 w-3/4 rounded-3xl p-0 shadow-md sm:w-2/3 md:w-3/5 lg:w-1/2"
        in:scale={{ duration: 200, start: 0.95, opacity: 0.75 }}
        out:scale={{ duration: 150, start: 0.95 }}
    >
        <div class=" flex flex-col sm:p-4">
            <div class="mx-8 mt-4 flex items-start justify-between">
                <div class="flex flex-wrap gap-2">
                    {#if currentItem.state}
                        <span
                            class="bg-csi-blue flex h-auto w-fit items-center rounded-lg px-4 py-1 text-xs font-semibold text-white shadow sm:text-sm"
                            >{currentItem.state}</span
                        >
                    {/if}
                    {#if currentItem.tag}
                        <span
                            class="bg-csi-blue flex h-auto w-fit items-center rounded-lg px-4 py-1 text-xs font-semibold text-white shadow sm:text-sm"
                            >{currentItem.tag}</span
                        >
                    {/if}
                    {#if currentItem.type}
                        <span
                            class="bg-csi-blue flex h-auto w-fit items-center rounded-lg px-4 py-1 text-xs font-semibold text-white shadow sm:text-sm"
                            >{currentItem.type}</span
                        >
                    {/if}
                </div>
                <div class="ml-2">
                    <button
                        aria-label="Close Modal"
                        onclick={requestDialogClose}
                        class="p-1 text-gray-500 hover:text-gray-700"
                    >
                        <Icon icon={CloseIcon} class="h-6 w-6 cursor-pointer" />
                    </button>
                </div>
            </div>

            <div class="mx-8 flex flex-col *:!my-0">
                <h1 class=" text-xl font-bold sm:text-2xl md:text-4xl">{currentItem.name}</h1>
                <p class=" sm:text-md text-sm md:text-lg">
                    {#if currentItem.duration}
                        {currentItem.duration}
                    {:else}
                        No data available for duration
                    {/if}
                </p>
            </div>

            <div class=" mx-4 md:mx-0">
                {#if currentItem.picture}
                    <enhanced:img
                        src={currentItem.picture}
                        alt="dummy"
                        loading="eager"
                        class="m-0 aspect-square w-full rounded-xl object-cover md:h-90"
                    />
                {:else}
                    <img
                        src={placeholder}
                        alt="UP CSI Logo Placeholder"
                        class="m-0 aspect-square w-full rounded-xl object-cover md:h-90"
                    />
                {/if}
            </div>
            <div class="mx-8 mt-4 flex items-start justify-between">
                <p class=" sm:text-md text-sm md:text-lg">
                    {currentItem.description}
                </p>
            </div>
        </div>
    </dialog>
{/if}
