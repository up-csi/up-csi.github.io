import { building } from '$app/environment';
import { minify } from 'html-minifier';

export function handle({ event, resolve }) {
    let page = '';
    return resolve(event, {
        transformPageChunk({ html, done }) {
            page += html;
            if (done)
                return building
                    ? minify(page, {
                          collapseWhitespace: true,
                          conservativeCollapse: true,
                          decodeEntities: true,
                          html5: true,
                          ignoreCustomComments: [/^#/],
                          minifyCSS: true,
                          minifyJS: false,
                          removeAttributeQuotes: true,
                          removeComments: false, // necessary for hydration code
                          removeOptionalTags: true,
                          removeRedundantAttributes: true,
                          removeScriptTypeAttributes: true,
                          removeStyleLinkTypeAttributes: true,
                          sortAttributes: true,
                          sortClassName: true,
                      })
                    : page;
        },
    });
}
