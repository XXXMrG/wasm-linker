const esbuild = require('esbuild');

// @todo: parse some enviroment variables
// @todo: Multiple out points (umd, esm)

esbuild.build({
    bundle: true,
    entryPoints: ['src/main.ts'],
    loader: {
        '.ts': 'ts',
    },
    minify: true,
    tsconfig: 'tsconfig.json',
    sourcemap: 'external',
    target: ['es5'],
    outdir: 'dist',
    treeShaking: true,
});
