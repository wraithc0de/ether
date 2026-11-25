import * as esbuild from 'esbuild';
import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';
import fs from 'node:fs';

// clean and recreate dist folder
console.log('cleaning');
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });

// build tha shji
console.log('building');
await esbuild.build({
    entryPoints: ['src/index.js', 'src/styles/index.css'],
    bundle: true, 
    minify: true,
    sourcemap: true,
    format: 'esm',
    outdir: 'dist',
    plugins: [
        minifyHTMLLiteralsPlugin({
            minifyOptions: {
                conservativeCollapse: true,
                minifyCSS: (text) => {
                    return esbuild.transformSync(text, {
                        loader: 'css',
                        minify: true
                    }).code.trim();
                },
                removeEmptyAttributes: false
            }
        })
    ]
});

console.log('complete');