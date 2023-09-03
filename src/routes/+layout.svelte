<script>
    import './app.css';
</script>

<nav class="sticky top-0 bg-inherit shadow-md">
    <!-- TODO: UP CSI Logo -->
    <ul class="flex flex-row justify-end gap-4 p-4">
        <li>People</li>
        <li>Events</li>
        <li>Partnerships</li>
        <li>Newsletter</li>
    </ul>
</nav>
<slot />
<footer class="p-8 sm:p-12 md:p-16">
    <ul class="flex flex-row flex-wrap justify-center gap-8">
        <!-- TODO: Use actual SVG social icons here. -->
        <li><a href="mailto:dcs.innovate@gmail.com">dcs.innovate@gmail.com</a></li>
        <li>
            <a target="_blank" rel="noopener" href="https://www.facebook.com/upcsi"> Facebook </a>
        </li>
        <li>
            <a target="_blank" rel="noopener" href="https://twitter.com/officialupcsi"> Twitter </a>
        </li>
        <li>
            <a
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/company/up-center-for-student-innovations/"
            >
                LinkedIn
            </a>
        </li>
        <li>
            <a target="_blank" rel="noopener" href="https://github.com/up-csi ">GitHub</a>
        </li>
    </ul>
</footer>
