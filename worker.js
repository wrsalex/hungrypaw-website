export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = url.pathname;
    if (pathname === '/' || pathname === '') pathname = '/index.html';
    const clean = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    return env.ASSETS.fetch(new Request(url.origin + '/' + clean, request));
  }
};
