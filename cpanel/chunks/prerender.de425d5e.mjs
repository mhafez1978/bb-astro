/* empty css                          */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from './astro.c35989ab.mjs';
import 'html-escaper';
import $$Layout from './pages/layout.astro.21551e69.mjs';
import { $ as $$Header, a as $$PageHeader, b as $$Preloader } from './pages/index.astro.0562b8f4.mjs';

const $$Astro = createAstro();
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "HomePageLayout", $$Layout, { "pageTitle": "About", "pageDescription": "This is the About us page", "pageKeywords": "Blooming Brands, About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageHeading": "About Us", "pageURL": "/about" })}
  ${renderComponent($$result2, "Preloader", $$Preloader, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/about/index.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/about/index.astro";
const $$url = "/about";

export { $$Index as default, $$file as file, prerender, $$url as url };
