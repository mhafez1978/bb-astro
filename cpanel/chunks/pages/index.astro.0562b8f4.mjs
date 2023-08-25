/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.c35989ab.mjs';
import 'html-escaper';
import $$Layout from './layout.astro.21551e69.mjs';

const $$Astro$d = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    { id: 0, name: "Home", url: "/" },
    { id: 1, name: "About", url: "/about" },
    { id: 2, name: "Services", url: "/services" },
    { id: 3, name: "Portfolio", url: "/portfolio" },
    { id: 4, name: "Latest News", url: "/posts" },
    { id: 5, name: "Contact", url: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="s-header">
  <div class="header-logo">
    <!-- <a class="site-logo" href="index.html">
      <img src="./images/logo.png" alt="Homepage" />
    </a> -->
    <h1 class="text-white text-5xl">
      <a style="width:280px" href="/"> Blooming Brands</a>
    </h1>
  </div>

  <nav class="header-nav">
    <a href="#0" class="header-nav__close" title="close"><span>Close</span></a>
    <div class="header-nav__content">
      <h3>Blooming Brands</h3>

      <ul class="header-nav__list">
        <li class="current">
          <a class="smoothscroll" href="/" title="home">Home</a>
        </li>
        <li><a class="smoothscroll" href="/about" title="about">About</a></li>
        <li>
          <a class="smoothscroll" href="/services" title="services">Services</a>
        </li>
        <li>
          <a class="smoothscroll" href="/portfolio" title="works">Portfolio</a>
        </li>
        <li>
          <a class="smoothscroll" href="/posts" title="clients">Latest News</a>
        </li>
        <li>
          <a class="smoothscroll" href="/contact" title="contact">Contact</a>
        </li>
      </ul>

      <p class="text-white">
        Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href="#0">voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque
        reprehenderit.
      </p>

      <ul class="header-nav__social">
        <li>
          <a href="#"><i class="fa fa-facebook"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-twitter"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-instagram"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-linkedin"></i></a>
        </li>
        <!-- <li>
          <a href="#"><i class="fa fa-"></i></a>
        </li> -->
      </ul>
    </div>
    <!-- end header-nav__content -->
  </nav>
  <!-- end header-nav -->

  <a class="header-menu-toggle lg:hidden xl:hidden" href="#0">
    <!-- <span class="header-menu-text">Menu</span> -->
    <span class="header-menu-icon"></span>
  </a>
  <div class="desktopMenu">
    <ul class="flex flex-row justify-end h-[10vh] items-center px-10 text-white text-3xl font-black">
      ${links.map((link) => renderTemplate`<li class="mr-4">
            <a${addAttribute(link.url, "href")}>${link.name}</a>
          </li>`)}
    </ul>
  </div>

  <!-- end s-header -->

  
</header>`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/header.astro", void 0);

const $$Astro$c = createAstro();
const $$CallToaction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CallToaction;
  return renderTemplate`<!-- home
    ================================================== -->${maybeRenderHead()}<section id="home" class="s-home target-section" data-parallax="scroll" data-image-src="./images/hero-bg.jpg" data-natural-width="3000" data-natural-height="2000" data-position-y="center">
  <div class="overlay"></div>
  <div class="shadow-overlay"></div>

  <div class="home-content">
    <div class="row home-content__main">
      <h3>Boston MA Based Web Agency Powerhouse</h3>

      <h1>
        We Fuel Your Business Success with Engaging Web Design and Strategic
        Online Targeted Marketing.
      </h1>

      <div class="home-content__buttons">
        <a href="#contact" class="smoothscroll btn btn--stroke">
          Get A Free Quote
        </a>
        <a href="#about" class="smoothscroll btn btn--stroke"> More About Us</a>
      </div>
    </div>

    <div class="home-content__scroll">
      <a href="#about" class="scroll-link smoothscroll">
        <span>Scroll Down</span>
      </a>
    </div>

    <div class="home-content__line"></div>
  </div>
  <!-- end home-content -->

  <ul class="home-social">
    <li>
      <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
    </li>
    <li>
      <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
    </li>
    <li>
      <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
    </li>
    <li>
      <a href="#0"><i class="fa fa-behance" aria-hidden="true"></i><span>Behance</span></a>
    </li>
    <li>
      <a href="#0"><i class="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a>
    </li>
  </ul>
  <!-- end home-social -->
</section>
<!-- end s-home -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/callToaction.astro", void 0);

const $$Astro$b = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<!-- about
    ================================================== -->${maybeRenderHead()}<section id="about" class="s-about">
  <div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
      <h3 class="subhead subhead--dark">About us</h3>
      <h1 class="display-1 display-1--light">Blooming Brands.</h1>
    </div>
  </div>
  <!-- end section-header -->

  <div class="row about-desc" data-aos="fade-up">
    <div class="col-full">
      <p>
        Welcome to Blooming Brands LLC, We're your partner in crafting
        remarkable digital experiences. As a leading Boston-based full web
        design and marketing agency, we specialize in transforming ideas into
        engaging online realities. With a blend of creativity, cutting edge
        technologies, and technical expertise, we're committed to helping small
        business get new leads online for their business.
      </p>
    </div>
  </div>
  <!-- end about-desc -->

  <div class="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
    <div class="col-block stats__col">
      <div class="stats__count">127</div>
      <h5>GitHub Repositories</h5>
    </div>
    <div class="col-block stats__col">
      <div class="stats__count">1505</div>
      <h5>Cups of Coffee</h5>
    </div>
    <div class="col-block stats__col">
      <div class="stats__count">109786098</div>
      <h5>Lines of Code</h5>
    </div>
    <div class="col-block stats__col">
      <div class="stats__count">4</div>
      <h5>Happy Clients</h5>
    </div>
  </div>
  <!-- end about-stats -->

  <div class="about__line"></div>
</section>
<!-- end s-about -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/about.astro", void 0);

const $$Astro$a = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`<!-- services
    ================================================== -->${maybeRenderHead()}<section id="services" class="s-services">
  <div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
      <h3 class="subhead">What We Do</h3>
      <h1 class="display-2">
        We’ve got everything you need to launch and grow your business.
      </h1>
    </div>
  </div>
  <!-- end section-header -->

  <div class="row services-list block-1-2 block-tab-full">
    <div class="col-block service-item" data-aos="fade-up">
      <div class="service-icon">
        <i class="icon-paint-brush"></i>
      </div>
      <div class="service-text">
        <h3 class="h2">Web Design</h3>
        <p>
          Our web design service is about crafting engaging experiences and
          convert. With an artful blend of creativity and strategy, we design
          websites that not only look stunning but also function flawlessly.
        </p>
      </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
      <div class="service-icon">
        <i class="icon-group"></i>
      </div>
      <div class="service-text">
        <h3 class="h2">Web Development</h3>
        <p>
          When off-the-shelf options falls short. Our tailored custom web
          development services can provide the functionality, scalability, and
          efficiency your business needs.
        </p>
      </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
      <div class="service-icon">
        <i class="icon-megaphone"></i>
      </div>
      <div class="service-text">
        <h3 class="h2">Online Marketing</h3>
        <p>
          Amplify Your Brand's Reach with Our Online Marketing Service. From SEO
          to social media, we drive engagement, conversions, and business
          growth. Elevate your digital presence online today.
        </p>
      </div>
    </div>

    <div class="col-block service-item" data-aos="fade-up">
      <div class="service-icon">
        <i class="icon-earth"></i>
      </div>
      <div class="service-text">
        <h3 class="h2">Creative Content</h3>
        <p>
          Unlesh the power of good content. From compelling sales and
          copywriting services to captivating visuals, we craft stories that
          resonate and inspire. Elevate your brand's narrative today.
        </p>
      </div>
    </div>

    <!-- <div class="col-block service-item" data-aos="fade-up">
      <div class="service-icon">
        <i class="icon-cube"></i>
      </div>
      <div class="service-text">
        <h3 class="h2">Packaging Design</h3>
        <p>
          Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
          ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
          veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
          ipsa in tempora esse soluta sint.
        </p>
      </div>
    </div> -->

    <!-- <div class="col-block service-item" data-aos="fade-up">
      <div class="service-icon"><i class="icon-lego-block"></i></div>
      <div class="service-text">
        <h3 class="h2">Web Development</h3>
        <p>
          Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit
          ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
          veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas
          ipsa in tempora esse soluta sint.
        </p>
      </div>
    </div> -->
  </div>
  <!-- end services-list -->
</section>
<!-- end s-services -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/services.astro", void 0);

const $$Astro$9 = createAstro();
const $$RecentWorks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$RecentWorks;
  return renderTemplate`<!-- works
    ================================================== -->${maybeRenderHead()}<section id="works" class="s-works">
  <div class="intro-wrap">
    <div class="row section-header has-bottom-sep light-sep" data-aos="fade-up">
      <div class="col-full">
        <h3 class="subhead">Recent Projects</h3>
        <h1 class="display-2 display-2--light">
          We love what we do, check out some of our latest projects.
        </h1>
      </div>
    </div>
    <!-- end section-header -->
  </div>
  <!-- end intro-wrap -->

  <div class="row works-content">
    <div class="col-full masonry-wrap">
      <div class="masonry">
        <div class="masonry__brick" data-aos="fade-up">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a href="images/portfolio/gallery/g-shutterbug.jpg" class="thumb-link" title="Shutterbug" data-size="1050x700">
                <img src="./images/portfolio/lady-shutterbug.jpg" srcset="./images/portfolio/lady-shutterbug.jpg 1x, ./images/portfolio/lady-shutterbug@2x.jpg 2x" alt="">
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Prestige Worldwide Limos</h3>
              <p class="item-folio__cat">Branding</p>
            </div>

            <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
              <i class="icon-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>
        <!-- end masonry__brick -->

        <div class="masonry__brick" data-aos="fade-up">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a href="images/portfolio/gallery/g-woodcraft.jpg" class="thumb-link" title="Woodcraft" data-size="1050x700">
                <img src="./images/portfolio/woodcraft.jpg" srcset="./images/portfolio/woodcraft.jpg 1x, ./images/portfolio/woodcraft@2x.jpg 2x" alt="">
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Woodcraft</h3>
              <p class="item-folio__cat">Web Design</p>
            </div>

            <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
              <i class="icon-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>
        <!-- end masonry__brick -->

        <div class="masonry__brick" data-aos="fade-up">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a href="images/portfolio/gallery/g-beetle.jpg" class="thumb-link" title="The Beetle Car" data-size="1050x700">
                <img src="./images/portfolio/the-beetle.jpg" srcset="./images/portfolio/the-beetle.jpg 1x, ./images/portfolio/the-beetle@2x.jpg 2x" alt="">
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">The Beetle</h3>
              <p class="item-folio__cat">Web Development</p>
            </div>

            <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
              <i class="icon-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>
        <!-- end masonry__brick -->

        <div class="masonry__brick" data-aos="fade-up">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a href="images/portfolio/gallery/g-grow-green.jpg" class="thumb-link" title="Grow Green" data-size="1050x700">
                <img src="./images/portfolio/grow-green.jpg" srcset="./images/portfolio/grow-green.jpg 1x, ./images/portfolio/grow-green@2x.jpg 2x" alt="">
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Grow Green</h3>
              <p class="item-folio__cat">Branding</p>
            </div>

            <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
              <i class="icon-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>
        <!-- end masonry__brick -->

        <div class="masonry__brick" data-aos="fade-up">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a href="images/portfolio/gallery/g-guitarist.jpg" class="thumb-link" title="Guitarist" data-size="1050x700">
                <img src="./images/portfolio/guitarist.jpg" srcset="./images/portfolio/guitarist.jpg 1x, ./images/portfolio/guitarist@2x.jpg 2x" alt="">
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Guitarist</h3>
              <p class="item-folio__cat">Web Design</p>
            </div>

            <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
              <i class="icon-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>
        <!-- end masonry__brick -->

        <div class="masonry__brick" data-aos="fade-up">
          <div class="item-folio">
            <div class="item-folio__thumb">
              <a href="images/portfolio/gallery/g-palmeira.jpg" class="thumb-link" title="Palmeira" data-size="1050x700">
                <img src="./images/portfolio/palmeira.jpg" srcset="./images/portfolio/palmeira.jpg 1x, ./images/portfolio/palmeira@2x.jpg 2x" alt="">
              </a>
            </div>

            <div class="item-folio__text">
              <h3 class="item-folio__title">Palmeira</h3>
              <p class="item-folio__cat">Web Design</p>
            </div>

            <a href="https://www.behance.net/" class="item-folio__project-link" title="Project link">
              <i class="icon-link"></i>
            </a>

            <div class="item-folio__caption">
              <p>
                Vero molestiae sed aut natus excepturi. Et tempora numquam.
                Temporibus iusto quo.Unde dolorem corrupti neque nisi.
              </p>
            </div>
          </div>
        </div>
        <!-- end masonry__brick -->
      </div>
      <!-- end masonry -->
    </div>
    <!-- end col-full -->
  </div>
  <!-- end works-content -->
</section>
<!-- end s-works -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/recentWorks.astro", void 0);

const $$Astro$8 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`<!-- clients
    ================================================== -->${maybeRenderHead()}<section id="clients" class="s-clients">
  <div class="row section-header" data-aos="fade-up">
    <div class="col-full">
      <h3 class="subhead">Our Clients</h3>
      <h1 class="display-2">
        Glint has been honored to partner up with these clients
      </h1>
    </div>
  </div>
  <!-- end section-header -->

  <div class="row clients-outer" data-aos="fade-up">
    <div class="col-full">
      <div class="clients">
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/apple.png"></a>
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/atom.png"></a>
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/blackberry.png"></a>
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/dropbox.png"></a>
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/envato.png"></a>
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/firefox.png"></a>
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/joomla.png"></a>
        <a href="#0" title="" class="clients__slide"><img src="./images/clients/magento.png"></a>
      </div>
      <!-- end clients -->
    </div>
    <!-- end col-full -->
  </div>
  <!-- end clients-outer -->

  <div class="row clients-testimonials" data-aos="fade-up">
    <div class="col-full">
      <div class="testimonials">
        <div class="testimonials__slide">
          <p>
            Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam
            accusantium ipsum. Laudantium quia consequatur molestias delectus
            culpa facere hic dolores aperiam. Accusantium quos qui praesentium
            corpori. Excepturi nam cupiditate culpa doloremque deleniti
            repellat.
          </p>

          <img src="./images/avatars/user-01.jpg" alt="Author image" class="testimonials__avatar">
          <div class="testimonials__info">
            <span class="testimonials__name">Tim Cook</span>
            <span class="testimonials__pos">CEO, Apple</span>
          </div>
        </div>

        <div class="testimonials__slide">
          <p>
            Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam
            quos repellat voluptas animi adipisci. Nisi eaque consequatur. Quasi
            voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus
            quisquam vel.
          </p>

          <img src="./images/avatars/user-05.jpg" alt="Author image" class="testimonials__avatar">
          <div class="testimonials__info">
            <span class="testimonials__name">Sundar Pichai</span>
            <span class="testimonials__pos">CEO, Google</span>
          </div>
        </div>

        <div class="testimonials__slide">
          <p>
            Repellat dignissimos libero. Qui sed at corrupti expedita voluptas
            odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque
            officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas
            eius distinctio.
          </p>

          <img src="./images/avatars/user-02.jpg" alt="Author image" class="testimonials__avatar">
          <div class="testimonials__info">
            <span class="testimonials__name">Satya Nadella</span>
            <span class="testimonials__pos">CEO, Microsoft</span>
          </div>
        </div>
      </div><!-- end testimonials -->
    </div>
    <!-- end col-full -->
  </div>
  <!-- end client-testimonials -->
</section>
<!-- end s-clients -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/testimonials.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- footer
    ================================================== -->${maybeRenderHead()}<footer>
  <div class="row footer-main">
    <div class="col-six tab-full left footer-desc">
      <div class="footer-logo"></div>
      Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
      a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris
      blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
      tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus
      vitae aut.
    </div>

    <div class="col-six tab-full right footer-subscribe">
      <h4>Get Notified</h4>
      <p>
        Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut
        non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto
        porro.
      </p>

      <div class="subscribe-form">
        <form id="mc-form" class="group" novalidate="true">
          <input type="email" value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address" required="">
          <input type="submit" name="subscribe" value="Subscribe">
          <label for="mc-email" class="subscribe-message"></label>
        </form>
      </div>
    </div>
  </div>
  <!-- end footer-main -->

  <div class="row footer-bottom">
    <div class="col-twelve">
      <div class="copyright">
        <span>© Copyright Glint 2017</span>
        <span>2023 - 2024 &copy; All rights reserved <a href="/">Blooming Brands LLC</a></span>
      </div>

      <div class="go-top">
        <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-arrow-up" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
  <!-- end footer-bottom -->
</footer>
<!-- end footer -->

<!-- photoswipe background
    ================================================== -->
<div aria-hidden="true" class="pswp" role="dialog" tabindex="-1">
  <div class="pswp__bg"></div>
  <div class="pswp__scroll-wrap">
    <div class="pswp__container">
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
    </div>

    <div class="pswp__ui pswp__ui--hidden">
      <div class="pswp__top-bar">
        <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
        <button class="pswp__button pswp__button--share" title="Share"></button>
        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
        <div class="pswp__preloader">
          <div class="pswp__preloader__icn">
            <div class="pswp__preloader__cut">
              <div class="pswp__preloader__donut"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
        <div class="pswp__share-tooltip"></div>
      </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
      <div class="pswp__caption">
        <div class="pswp__caption__center"></div>
      </div>
    </div>
  </div>
</div>
<!-- end photoSwipe background -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$Preloader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Preloader;
  return renderTemplate`${maybeRenderHead()}<div id="preloader">
  <div id="loader">
    <div class="line-scale-pulse-out">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</div>`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/preloader.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "HomePageLayout", $$Layout, { "pageTitle": "Homepage" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${renderComponent($$result2, "CallToAction", $$CallToaction, {})}
  ${renderComponent($$result2, "About", $$About, {})}
  ${renderComponent($$result2, "Services", $$Services, {})}
  ${renderComponent($$result2, "RecentWorks", $$RecentWorks, {})}
  ${renderComponent($$result2, "Testimonials", $$Testimonials, {})}
  ${renderComponent($$result2, "Footer", $$Footer, {})}
  ${renderComponent($$result2, "Preloader", $$Preloader, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/index.astro", void 0);

const $$file$4 = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$PageHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { pageHeading, pageURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="s-aboutPage h-[100vh] flex flex-col justify-center items-center">
  <div class="row section-header has-bottom-sep" data-aos="fade-up">
    <div class="col-full">
      <h3 class="text-white">
        You're here:
        <a href="/">Home</a> >
        <a${addAttribute(pageURL, "href")}>${pageHeading}</a>
      </h3>
      <h1 class="display-1 display-1--light">${pageHeading}</h1>
    </div>
  </div>
  <!-- end section-header -->

  <div class="row about-desc" data-aos="fade-up">
    <div class="col-full">
      <p>
        We are a group of professional local creators, designers, developers,
        and marketing experts. Our mission is to empower small business with
        cutting edge technology and big data to help them grow.
      </p>
    </div>
  </div>
  <!-- end about-desc -->
</section>
<!-- end s-about -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/components/partials/pageHeader.astro", void 0);

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "HomePageLayout", $$Layout, { "pageTitle": "Portfolio", "pageDescription": "This is the Portfolio page", "pageKeywords": "Blooming Brands, About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageHeading": "Recent Projects", "pageURL": "/portfolio" })}
  ${renderComponent($$result2, "Preloader", $$Preloader, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/portfolio/index.astro", void 0);

const $$file$3 = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/portfolio/index.astro";
const $$url$3 = "/portfolio";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "HomePageLayout", $$Layout, { "pageTitle": "Services", "pageDescription": "This is the Services page", "pageKeywords": "Blooming Brands, Services" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageHeading": "Our Services", "pageURL": "/services" })}
  ${renderComponent($$result2, "Preloader", $$Preloader, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/services/index.astro", void 0);

const $$file$2 = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/services/index.astro";
const $$url$2 = "/services";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "HomePageLayout", $$Layout, { "pageTitle": "Contact", "pageDescription": "This is the Contact us page", "pageKeywords": "Blooming Brands, Contact" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageHeading": "Contact us", "pageURL": "/contact" })}
  ${renderComponent($$result2, "Preloader", $$Preloader, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/contact/index.astro", void 0);

const $$file$1 = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/contact/index.astro";
const $$url$1 = "/contact";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "HomePageLayout", $$Layout, { "pageTitle": "Latest News", "pageDescription": "This is the Posts page", "pageKeywords": "Blooming Brands, Latest News" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Header", $$Header, {})}
  ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageHeading": "Latest News", "pageURL": "/posts" })}
  ${renderComponent($$result2, "Preloader", $$Preloader, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/posts/index.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/blooming-brands-astro/src/pages/posts/index.astro";
const $$url = "/posts";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, $$PageHeader as a, $$Preloader as b, index$3 as c, index$2 as d, index$1 as e, index as f, index$4 as i };
