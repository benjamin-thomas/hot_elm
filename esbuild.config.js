const ElmPlugin = require('esbuild-plugin-elm')
const esbuild = require('esbuild')

const isWatching = process.argv.includes("--watch");
esbuild.build({
  entryPoints: ['./app/javascript/application.js'],
  bundle: true,
  outdir: "app/assets/builds",
  publicPath: "assets",
  watch: isWatching,
  sourcemap: true,
  plugins: [
    ElmPlugin({ debug: isWatching })
  ],
}).catch(e => (console.error(e), process.exit(1)))
