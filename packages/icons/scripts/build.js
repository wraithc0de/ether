import fs from 'node:fs';
import path from 'node:path';
import SVGFixer from 'oslllo-svg-fixer';
import { generateFonts } from '@twbs/fantasticon';

const PKG_DIR = path.resolve(import.meta.dirname, '..');
const ROOT_DIR = path.resolve(PKG_DIR, '../..');

const SRC_DIR = path.join(PKG_DIR, 'src/icons');
const FIXED_DIR = path.join(PKG_DIR, 'src/icons-fixed');
const DIST_DIR = path.join(PKG_DIR, 'dist');
const SITE_ICONS_DIR = path.join(ROOT_DIR, 'icons');

async function build() {
    // clean previous build shi
    console.log('cleaning');
    fs.rmSync(FIXED_DIR, { recursive: true, force: true });
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
    fs.mkdirSync(FIXED_DIR, { recursive: true });
    fs.mkdirSync(path.join(DIST_DIR, 'fonts'), { recursive: true });
    fs.mkdirSync(path.join(DIST_DIR, 'css'), { recursive: true });
    fs.mkdirSync(path.join(DIST_DIR, 'preview'), { recursive: true });

    // make strokes into proper filled shapes
    console.log('outlining strokes');
    await SVGFixer(SRC_DIR, FIXED_DIR).fix();

    // compile font, css, and json
    console.log('generating font');
    await generateFonts({
        inputDir: FIXED_DIR,
        outputDir: path.join(DIST_DIR, 'fonts'),
        fontTypes: ['woff2', 'woff'],
        assetTypes: ['css', 'json', 'html'],
        name: 'ether-icons',
        prefix: 'ei',
        normalize: true,
        fontsUrl: '../fonts',
        pathOptions: {
            css: path.join(DIST_DIR, 'css/ether-icons.css'),
            html: path.join(DIST_DIR, 'preview/index.html'),
            json: path.join(DIST_DIR, 'ether-icons.json')
        }
    });
    // fix stylesheet path in preview
    const previewPath = path.join(DIST_DIR, 'preview/index.html');
    fs.writeFileSync(previewPath, fs.readFileSync(previewPath, 'utf8').replace('href="ether-icons.css"', 'href="../css/ether-icons.css"'));

    // put compiled assets into site's icons page as well
    console.log('syncing with site');
    fs.cpSync(path.join(DIST_DIR, 'fonts'), path.join(SITE_ICONS_DIR, 'fonts'), { recursive: true });
    fs.cpSync(path.join(DIST_DIR, 'css'), path.join(SITE_ICONS_DIR, 'css'), { recursive: true });
    fs.copyFileSync(path.join(DIST_DIR, 'ether-icons.json'), path.join(SITE_ICONS_DIR, 'ether-icons.json'));

    console.log('done');
}

build().catch((e) => {
    console.error('build failed:', e);
    process.exit(1);
});