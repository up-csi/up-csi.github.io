<script lang="ts">
    /* eslint-disable svelte/no-navigation-without-resolve */
    import Icon from '@iconify/svelte';
    import LeftArrow from '@iconify/icons-heroicons/arrow-left-circle';
    import RightArrow from '@iconify/icons-heroicons/arrow-right-circle';

    import CarouselModal from '$lib/components/modals/CarouselModal.svelte';

    import placeholder from '$lib/assets/lino/lino-sablay.svg';

    let showModal = $state(false);

    interface Item {
        name: string;
        description: string;
        tag: string;
        state: string;
        type: string;
        picture: string | null;
        registerLink: string;
        duration: string;
    }

    interface Props {
        items: Item[];
    }

    const { items = [] }: Props = $props();

    // filter items with pictures only
    const filteredItems = $derived(items.filter(item => item.picture));

    let currentIndex = $state(0);
    const currentItem = $derived(
        filteredItems[currentIndex] ?? {
            name: 'No Items Yet',
            description: 'No items are currently in the database',
            tag: 'General',
            state: '',
            type: '',
            picture: null,
            registerLink: '', // Optional: for events only
            duration: '',
        },
    );

    function nextItem() {
        currentIndex = (currentIndex + 1) % filteredItems.length;
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }

    function goToItem(index: number) {
        currentIndex = index;
    }
</script>

<!-- Add modal for every filtered item in carousel-->
<CarouselModal
    bind:showModal
    {currentIndex}
    items={filteredItems}
    {nextItem}
    {prevItem}
    {goToItem}
/>

<section
    class="font-dm mx-auto flex w-full max-w-5xl items-center justify-center gap-2 p-2 sm:gap-4"
    id="carousel-wrapper"
>
    <button aria-label="Previous slide" class=" self-center p-1" onclick={prevItem}>
        <Icon icon={LeftArrow} class="hover:text-csi-blue cursor-pointer text-4xl text-gray-400 " />
    </button>

    <div class="bg-muted shadow-csi-blue-500 overflow-hidden rounded-xl shadow-sm">
        <div
            class="text-foreground grid grid-cols-1 items-center gap-4 rounded-xl p-4 shadow-md sm:p-6 md:grid-cols-3 md:gap-8"
        >
            <div class="flex items-center justify-center">
                {#if currentItem.picture}
                    <enhanced:img
                        src={currentItem.picture}
                        alt={currentItem.name}
                        loading="lazy"
                        class="aspect-square h-48 rounded-xl object-cover md:h-64 md:w-96"
                    />
                {:else}
                    <!-- Placeholder image when events carousel is empty -->
                    <img
                        src={placeholder}
                        alt="UP CSI Logo Placeholder"
                        class="aspect-square h-48 rounded-xl object-cover md:h-64 md:w-96"
                    />
                {/if}
            </div>
            <div
                class="grid w-full grid-rows-[30px_150px_30px] items-center gap-1 overflow-hidden py-2 text-center sm:gap-2 md:col-span-2 md:items-start md:text-left"
            >
                <span
                    class="bg-csi-blue flex h-auto w-fit items-center place-self-center rounded-lg px-4 py-1 text-xs text-white shadow sm:text-sm md:place-self-start"
                >
                    {#if currentItem.tag}
                        {currentItem.tag}
                    {:else}
                        <!--NOTE: if tag does not exist-->
                        General
                    {/if}
                </span>
                <div class="prose prose-sm mt-0 max-w-none md:mt-1">
                    <h1 class="mt-1 mb-1 text-2xl font-bold sm:text-3xl lg:text-4xl">
                        {currentItem.name}
                    </h1>
                    <p class="text-md mt-0 line-clamp-3 sm:text-lg">
                        {currentItem.description}
                    </p>
                </div>
                <div
                    class="mb-2 flex w-full flex-wrap items-center justify-center gap-2 md:justify-start"
                >
                    <button
                        onclick={() => {
                            showModal = true;
                        }}
                        class="border-csi-blue text-foreground hover:bg-csi-blue hover:text-background cursor-pointer rounded-lg border px-3 py-1 text-xs no-underline hover:shadow-inner sm:text-sm"
                    >
                        More Info
                    </button>
                    {#if currentItem.state === 'Upcoming' && currentItem.registerLink}
                        <a
                            href={currentItem.registerLink}
                            target="_blank"
                            rel="external"
                            class=" border-csi-blue text-foreground hover:bg-csi-blue hover:text-background cursor-pointer rounded-lg border px-3 py-1 text-xs no-underline hover:shadow-inner sm:text-sm"
                            >Register</a
                        >
                    {/if}
                </div>
            </div>
        </div>

        <div class="bg-background flex items-center justify-center space-x-3 py-4">
            {#each filteredItems as item, i (i)}
                <button
                    aria-label="Go to slide {i}"
                    aria-current="true"
                    onclick={() => {
                        goToItem(i);
                    }}
                    class={[
                        'h-2.5 w-2.5 cursor-pointer rounded-full',
                        item === currentItem ? 'bg-csi-blue' : 'bg-gray-300',
                        { 'hover:bg-gray-400': item !== currentItem },
                    ]}
                ></button>
            {/each}
        </div>
    </div>

    <button aria-label="Next slide" class=" self-center p-1" onclick={nextItem}>
        <Icon
            icon={RightArrow}
            class="hover:text-csi-blue cursor-pointer text-4xl text-gray-400 "
        />
    </button>
</section>
