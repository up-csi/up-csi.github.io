<script>
    import Icon from '@iconify/svelte';

    import Moon from '@iconify/icons-heroicons/moon-solid';
    import Sun from '@iconify/icons-heroicons/sun-solid';

    const KEY = 'theme';

    function getTheme() {
        const result = localStorage.getItem(KEY);
        const media = matchMedia('(prefers-color-scheme: dark)');
        return result === null ? media.matches : Boolean(JSON.parse(result));
    }

    let is_dark = $state(false);

    $effect(() => {
        is_dark = getTheme();
    });

    function toggle() {
        is_dark = !is_dark;
        localStorage.setItem(KEY, is_dark ? '1' : '0');
        document.documentElement.setAttribute('data-theme', is_dark ? 'dark' : '');
    }
</script>

<svelte:head>
    <script>
        const result = localStorage.getItem('theme');
        const media = matchMedia('(prefers-color-scheme: dark)');
        initial_theme = result === null ? media.matches : Boolean(JSON.parse(result));

        document.documentElement.setAttribute('data-theme', initial_theme ? 'dark' : '');
    </script>
</svelte:head>

<button
    class="border-muted hover:bg-muted/25 rounded-full border p-2 transition-colors hover:shadow-inner"
    onclick={toggle}
>
    <Icon icon={is_dark ? Sun : Moon} width="18" height="18" />
</button>
