<script>
    import { page } from '$app/stores';
    $: ({ pathname } = $page.url);
</script>

<ul class="flex flex-row justify-end gap-4 underline-offset-4">
    <li><a class="py-4" class:underline={pathname === '/people/'} href="/people/">People</a></li>
    <li><a class="py-4" class:underline={pathname === '/events/'} href="/events/">Events</a></li>
    <li>
        <a class="py-4" class:underline={pathname === '/partners/'} href="/partners/"
            >Partnerships</a
        >
    </li>
    <li><a class="py-4" class:underline={pathname === '/news/'} href="/news/">Newsletter</a></li>
</ul>
