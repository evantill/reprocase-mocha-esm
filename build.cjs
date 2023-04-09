const { build } = require("esbuild");
const { dependencies, peerDependencies } = require('./package.json')
const { Generator } = require('npm-dts');

new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts',
}).generate();

const sharedConfig = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: false
};

build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: "dist/index.cjs",
});

build({
  ...sharedConfig,
  outfile: "dist/index.esm.js",
  platform: 'neutral', // for ESM
  format: "esm",
  external: Object.keys(dependencies || {}).concat(Object.keys(peerDependencies || {})),
});
