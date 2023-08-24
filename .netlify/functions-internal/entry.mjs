import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { g as deserializeManifest } from './chunks/astro.95ff49db.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.977b3da2.mjs');
const _page1  = () => import('./chunks/index@_@astro.d56eadbe.mjs');
const _page2  = () => import('./chunks/index@_@astro.3c43b207.mjs');
const _page3  = () => import('./chunks/layout@_@astro.e9925c2b.mjs');
const _page4  = () => import('./chunks/index@_@astro.036bce39.mjs');const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/portfolio/index.astro", _page1],["src/pages/services/index.astro", _page2],["src/pages/layout.astro", _page3],["src/pages/about/index.astro", _page4]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ff30fe1b.js"}],"styles":[{"type":"external","src":"/_astro/index.116f880d.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ff30fe1b.js"}],"styles":[{"type":"external","src":"/_astro/index.116f880d.css"}],"routeData":{"route":"/portfolio","type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/index.astro","pathname":"/portfolio","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ff30fe1b.js"}],"styles":[{"type":"external","src":"/_astro/index.116f880d.css"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ff30fe1b.js"}],"styles":[{"type":"external","src":"/_astro/index.116f880d.css"}],"routeData":{"route":"/layout","type":"page","pattern":"^\\/layout\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/layout.astro","pathname":"/layout","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ff30fe1b.js"}],"styles":[{"type":"external","src":"/_astro/index.116f880d.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/layout.astro",{"propagation":"none","containsHead":true}],["/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/about/index.astro",{"propagation":"none","containsHead":true}],["/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/portfolio/index.astro",{"propagation":"none","containsHead":true}],["/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/services/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/layout.astro":"chunks/pages/layout.astro.0a9ee15e.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.977b3da2.mjs","\u0000@astro-page:src/pages/portfolio/index@_@astro":"chunks/index@_@astro.d56eadbe.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"chunks/index@_@astro.3c43b207.mjs","\u0000@astro-page:src/pages/layout@_@astro":"chunks/layout@_@astro.e9925c2b.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"chunks/index@_@astro.036bce39.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ff30fe1b.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.116f880d.css","/favicon.ico","/favicon.svg","/_astro/hoisted.ff30fe1b.js","/css/base.css","/css/fonts.css","/css/main.css","/css/vendor.css","/inc/sendEmail.php","/images/contact-bg.jpg","/images/email-icon.png","/images/hero-bg.jpg","/images/left-arrow.png","/images/logo-footer.png","/images/logo.png","/images/right-arrow.png","/images/sample-image.jpg","/images/wheel-1000.jpg","/images/wheel-2000.jpg","/images/wheel-500.jpg","/js/jquery-3.2.1.min.js","/js/main.js","/js/modernizr.js","/js/pace.min.js","/js/plugins.js","/css/micons/micons.css","/fonts/lora/lora-bold-webfont.ttf","/fonts/lora/lora-bold-webfont.woff","/fonts/lora/lora-bold-webfont.woff2","/fonts/lora/lora-bolditalic-webfont.woff","/fonts/lora/lora-bolditalic-webfont.woff2","/fonts/lora/lora-italic-webfont.ttf","/fonts/lora/lora-italic-webfont.woff","/fonts/lora/lora-italic-webfont.woff2","/fonts/lora/lora-regular-webfont.woff","/fonts/lora/lora-regular-webfont.woff2","/fonts/montserrat/montserrat-black-webfont.woff","/fonts/montserrat/montserrat-black-webfont.woff2","/fonts/montserrat/montserrat-bold-webfont.woff","/fonts/montserrat/montserrat-bold-webfont.woff2","/fonts/montserrat/montserrat-extrabold-webfont.woff","/fonts/montserrat/montserrat-extrabold-webfont.woff2","/fonts/montserrat/montserrat-extralight-webfont.woff","/fonts/montserrat/montserrat-extralight-webfont.woff2","/fonts/montserrat/montserrat-light-webfont.woff","/fonts/montserrat/montserrat-light-webfont.woff2","/fonts/montserrat/montserrat-medium-webfont.woff","/fonts/montserrat/montserrat-medium-webfont.woff2","/fonts/montserrat/montserrat-regular-webfont.woff","/fonts/montserrat/montserrat-regular-webfont.woff2","/fonts/montserrat/montserrat-semibold-webfont.woff","/fonts/montserrat/montserrat-semibold-webfont.woff2","/fonts/montserrat/montserrat-thin-webfont.woff","/fonts/montserrat/montserrat-thin-webfont.woff2","/images/avatars/user-01.jpg","/images/avatars/user-02.jpg","/images/avatars/user-03.jpg","/images/avatars/user-04.jpg","/images/avatars/user-05.jpg","/images/clients/apple.png","/images/clients/atom.png","/images/clients/blackberry.png","/images/clients/dropbox.png","/images/clients/envato.png","/images/clients/firefox.png","/images/clients/joomla.png","/images/clients/magento.png","/images/clients/mozilla.png","/images/clients/redhat.png","/images/clients/ubuntu.png","/images/clients/wordpress.png","/images/photoswipe/default-skin.png","/images/photoswipe/default-skin.svg","/images/photoswipe/preloader.gif","/images/portfolio/grow-green.jpg","/images/portfolio/grow-green@2x.jpg","/images/portfolio/guitarist.jpg","/images/portfolio/guitarist@2x.jpg","/images/portfolio/lady-shutterbug.jpg","/images/portfolio/lady-shutterbug@2x.jpg","/images/portfolio/palmeira.jpg","/images/portfolio/palmeira@2x.jpg","/images/portfolio/the-beetle.jpg","/images/portfolio/the-beetle@2x.jpg","/images/portfolio/woodcraft.jpg","/images/portfolio/woodcraft@2x.jpg","/css/font-awesome/css/font-awesome.css","/css/font-awesome/css/font-awesome.min.css","/css/micons/fonts/icomoon.eot","/css/micons/fonts/icomoon.svg","/css/micons/fonts/icomoon.ttf","/css/micons/fonts/icomoon.woff","/css/font-awesome/fonts/FontAwesome.otf","/css/font-awesome/fonts/fontawesome-webfont.eot","/css/font-awesome/fonts/fontawesome-webfont.svg","/css/font-awesome/fonts/fontawesome-webfont.ttf","/css/font-awesome/fonts/fontawesome-webfont.woff","/css/font-awesome/fonts/fontawesome-webfont.woff2","/images/portfolio/gallery/g-beetle.jpg","/images/portfolio/gallery/g-grow-green.jpg","/images/portfolio/gallery/g-guitarist.jpg","/images/portfolio/gallery/g-palmeira.jpg","/images/portfolio/gallery/g-shutterbug.jpg","/images/portfolio/gallery/g-woodcraft.jpg"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };