module.exports = {
    plugins: {
        tailwindcss: true,
        'postcss-prune-var': true,
        '@fullhuman/postcss-purgecss': {
            content: ['src/**/*.html'],
            defaultExtractor(content) {
                // Once Tailwind is able to prune global variables more effectively,
                // we must use third-party PostCSS plugins for the meantime.
                // https://github.com/FullHuman/purgecss/issues/796
                return content.match(/[\w-/:[\]]+(?<!:)/g) || [];
            },
        },
    },
};
