import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';
import { minify } from 'html-minifier';

export const handle: Handle = async ({ event, resolve }) => {
    let page = '';
    return resolve(event, {
        transformPageChunk({ html, done }): string | undefined {
            page += html;
            if (done) {
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
                          removeComments: false, // necessary for hydration
                          removeOptionalTags: true,
                          removeRedundantAttributes: true,
                          removeScriptTypeAttributes: true,
                          removeStyleLinkTypeAttributes: true,
                          sortAttributes: true,
                          sortClassName: true,
                      })
                    : page;
            }
        }
    });
};