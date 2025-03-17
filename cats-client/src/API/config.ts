const config = {
    server: import.meta.env.VITE_SERVER as string,
    paths: {
        cats: '/cats'
    },
    jsonContentTypeHeader: { "Content-Type": "application/json" }
}
export default config;