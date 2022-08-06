// https://github.com/thelucid/browsersyncing-rails/blob/main/lib/install/bs-config.js
module.exports = {
    proxy: {
        target: "localhost:3001",
        proxyOptions: {
            xfwd: true // CSRF protection is satisfied on localhost + local IP address with this param
        },
    },
    port: 3010,
    ui: { port: 3011 },
    files: ['app/assets', 'app/_assets', 'app/views'],
    open: false,
    notify: false,
    ws: true, // Only one browser tab can connect to port 4000, otherwise turbo stream messages will be duplicated.
    snippetOptions: {
        rule: {
            // Add to head as turbo replaces body.
            match: /<\/head>/i,
            fn: (snippet, match) => snippet + match
        }
    }
};
