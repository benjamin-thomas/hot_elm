const ElmPlugin = require('esbuild-plugin-elm')
const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['./app/javascript/application.js'],
  bundle: true,
  outdir: "app/assets/builds",
  publicPath: "assets",
  watch: process.argv.includes("--watch"),
  sourcemap: true,
  plugins: [
    ElmPlugin({ debug: true })
  ],
}).catch(e => (console.error(e), process.exit(1)))
