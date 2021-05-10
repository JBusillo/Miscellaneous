/* src/routes/about.svelte generated by Svelte v3.37.0 */
import { create_ssr_component } from "svelte/internal";

import { browser, dev } from "$app/env";

const css = {
	code: ".content.svelte-10k3ssc{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
	map: "{\"version\":3,\"file\":\"about.svelte\",\"sources\":[\"about.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n  import { browser, dev } from \\\"$app/env\\\";\\n\\n  // we don't need any JS on this page, though we'll load\\n  // it in dev so that we get hot module replacement...\\n  export const hydrate = dev;\\n\\n  // ...but if the client-side router is already loaded\\n  // (i.e. we came here from elsewhere in the app), use it\\n  export const router = browser;\\n\\n  // since there's no dynamic data here, we can prerender\\n  // it so that it gets served as a static asset in prod\\n  export const prerender = true;\\n</script>\\n\\n<script>\\n  //  let xx = ximport.meta.env.VITE_SVELTEKITTEN_API_PATH;\\n  console.log("https://api.xxxx.com");\\n</script>\\n\\n<svelte:head>\\n  <title>About</title>\\n</svelte:head>\\n\\n<div class=\\\"content\\\">\\n  <h1>About this app</h1>\\n\\n  <p>\\n    This is a <a href=\\\"https://kit.svelte.dev\\\">SvelteKit</a> app. You can make your own by typing the\\n    following into your command line and following the prompts:\\n  </p>\\n\\n  <!-- TODO lose the @next! -->\\n  <pre>npm init svelte@next</pre>\\n\\n  <p>\\n    The page you're looking at is purely static HTML, with no client-side interactivity needed.\\n    Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening\\n    the devtools network panel and reloading.\\n  </p>\\n\\n  <p>\\n    The <a href=\\\"/todos\\\">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using\\n    it with JavaScript disabled!\\n  </p>\\n</div>\\n\\n<style>\\n  .content {\\n    width: 100%;\\n    max-width: var(--column-width);\\n    margin: var(--column-margin-top) auto 0 auto;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAiDE,QAAQ,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,cAAc,CAAC,CAC9B,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,AAC9C,CAAC\"}"
};

const hydrate = dev;
const router = browser;
const prerender = true;

const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	console.log("https://api.xxxx.com");
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}

<div class="${"content svelte-10k3ssc"}"><h1>About this app</h1>

  <p>This is a <a href="${"https://kit.svelte.dev"}">SvelteKit</a> app. You can make your own by typing the
    following into your command line and following the prompts:
  </p>

  
  <pre>npm init svelte@next</pre>

  <p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
    Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
    the devtools network panel and reloading.
  </p>

  <p>The <a href="${"/todos"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
    it with JavaScript disabled!
  </p>
</div>`;
});

export default About;
export { hydrate, router, prerender };
import "/home/jbusillo/Projects/testing-kit/src/routes/about.svelte?svelte&type=style&lang.css";

