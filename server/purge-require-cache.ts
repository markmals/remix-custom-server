// purge require cache on requests for "server side HMR" this won't let
// you have in-memory objects between requests in development,
// alternatively you can set up nodemon/pm2-dev to restart the server on
// file changes, but then you'll have to reconnect to databases/etc on each
// change. We prefer the DX of this, so we've included it for you by default
export default function purgeRequireCache(buildDirectory: string) {
    for (let key in require.cache) {
        if (key.startsWith(buildDirectory)) {
            delete require.cache[key];
        }
    }
}
