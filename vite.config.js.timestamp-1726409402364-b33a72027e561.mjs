// vite.config.js
import autoprefixer from 'file:///C:/Users/kurt_/Downloads/up-csi.github.io/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.45/node_modules/autoprefixer/lib/autoprefixer.js';
import { defineConfig } from 'file:///C:/Users/kurt_/Downloads/up-csi.github.io/node_modules/.pnpm/vite@5.4.4_terser@5.32.0/node_modules/vite/dist/node/index.js';
import pruneVar from 'file:///C:/Users/kurt_/Downloads/up-csi.github.io/node_modules/.pnpm/postcss-prune-var@1.1.2/node_modules/postcss-prune-var/index.js';
import purgeCss from 'file:///C:/Users/kurt_/Downloads/up-csi.github.io/node_modules/.pnpm/@fullhuman+postcss-purgecss@6.0.0_postcss@8.4.45/node_modules/@fullhuman/postcss-purgecss/lib/postcss-purgecss.js';
import { sveltekit } from 'file:///C:/Users/kurt_/Downloads/up-csi.github.io/node_modules/.pnpm/@sveltejs+kit@2.5.26_@sveltejs+vite-plugin-svelte@3.1.2_svelte@4.2.19_vite@5.4.4_terser@5.32._5tbo7nyewccywc3hcj7u5hjbmq/node_modules/@sveltejs/kit/src/exports/vite/index.js';
import tailwind from 'file:///C:/Users/kurt_/Downloads/up-csi.github.io/node_modules/.pnpm/tailwindcss@3.4.11/node_modules/tailwindcss/lib/index.js';
var vite_config_default = defineConfig({
    plugins: [sveltekit()],
    css: {
        postcss: {
            plugins: [
                tailwind,
                autoprefixer,
                pruneVar,
                purgeCss({
                    content: ['src/**/*.{css,html,js,svelte,ts}'],
                    defaultExtractor(content) {
                        return content.match(/[\w-/:[\]]+(?<!:)/g) || [];
                    },
                }),
            ],
        },
    },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrdXJ0X1xcXFxEb3dubG9hZHNcXFxcdXAtY3NpLmdpdGh1Yi5pb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxca3VydF9cXFxcRG93bmxvYWRzXFxcXHVwLWNzaS5naXRodWIuaW9cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2t1cnRfL0Rvd25sb2Fkcy91cC1jc2kuZ2l0aHViLmlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG4vLyBAdHMtZXhwZWN0LWVycm9yIFRoaXMgbW9kdWxlIGN1cnJlbnRseSBkb2VzIG5vdCBwcm92aWRlIHR5cGUgZGVjbGFyYXRpb25zLlxuaW1wb3J0IHBydW5lVmFyIGZyb20gJ3Bvc3Rjc3MtcHJ1bmUtdmFyJztcbmltcG9ydCBwdXJnZUNzcyBmcm9tICdAZnVsbGh1bWFuL3Bvc3Rjc3MtcHVyZ2Vjc3MnO1xuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcbmltcG9ydCB0YWlsd2luZCBmcm9tICd0YWlsd2luZGNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW3N2ZWx0ZWtpdCgpXSxcbiAgICBjc3M6IHtcbiAgICAgICAgcG9zdGNzczoge1xuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgIHRhaWx3aW5kLFxuICAgICAgICAgICAgICAgIGF1dG9wcmVmaXhlcixcbiAgICAgICAgICAgICAgICBwcnVuZVZhcixcbiAgICAgICAgICAgICAgICBwdXJnZUNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFsnc3JjLyoqLyoue2NzcyxodG1sLGpzLHN2ZWx0ZSx0c30nXSxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEV4dHJhY3Rvcihjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmNlIFRhaWx3aW5kIGlzIGFibGUgdG8gcHJ1bmUgZ2xvYmFsIHZhcmlhYmxlcyBtb3JlIGVmZmVjdGl2ZWx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgbXVzdCB1c2UgdGhpcmQtcGFydHkgUG9zdENTUyBwbHVnaW5zIGZvciB0aGUgbWVhbnRpbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRnVsbEh1bWFuL3B1cmdlY3NzL2lzc3Vlcy83OTZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50Lm1hdGNoKC9bXFx3LS86W1xcXV0rKD88ITopL2cpIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVULE9BQU8sa0JBQWtCO0FBQ2hWLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sY0FBYztBQUNyQixPQUFPLGNBQWM7QUFDckIsU0FBUyxpQkFBaUI7QUFDMUIsT0FBTyxjQUFjO0FBRXJCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxVQUFVLENBQUM7QUFBQSxFQUNyQixLQUFLO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDTCxTQUFTLENBQUMsa0NBQWtDO0FBQUEsVUFDNUMsaUJBQWlCLFNBQVM7QUFJdEIsbUJBQU8sUUFBUSxNQUFNLG9CQUFvQixLQUFLLENBQUM7QUFBQSxVQUNuRDtBQUFBLFFBQ0osQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
