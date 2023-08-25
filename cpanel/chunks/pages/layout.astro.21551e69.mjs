/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, b as addAttribute } from '../astro.c35989ab.mjs';
import 'html-escaper';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, pageDescription, pageKeywords } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> -->\n    <!-- mobile specific metas\n    ================================================== -->\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="generator"', ">\n    <!--- basic page needs\n    ================================================== -->\n    <title>BB | ", '</title>\n    <meta name="description"', '>\n    <meta name="keywords"', '>\n    <meta name="author" content="">\n\n    <!-- CSS\n    ================================================== -->\n    <link rel="stylesheet" href="/css/base.css">\n    <link rel="stylesheet" href="/css/vendor.css">\n    <link rel="stylesheet" href="/css/main.css">\n\n    <!-- script\n    ================================================== -->\n    <script src="/js/modernizr.js"><\/script>\n    <script src="/js/pace.min.js"><\/script>\n\n    <!-- favicons\n    ================================================== -->\n    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">\n    <link rel="icon" href="/favicon.ico" type="image/x-icon">\n  ', '</head>\n  <body id="top">\n    ', '\n    <script src="/js/jquery-3.2.1.min.js"><\/script>\n    <script src="/js/plugins.js"><\/script>\n    <script src="/js/main.js"><\/script>\n  </body>\n</html>'])), addAttribute(Astro2.generator, "content"), pageTitle, addAttribute(pageDescription, "content"), addAttribute(pageKeywords, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/layout.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/layout.astro";
const $$url = "/layout";

export { $$Layout as default, $$file as file, $$url as url };
