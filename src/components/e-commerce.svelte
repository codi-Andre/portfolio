<script lang="ts">
  import TechCard from "./tech-card.svelte"
  import reactLogo from "../assets/logos/react.svg"
  import viteLogo from "../assets/logos/vite.svg"
  import tailwindLogo from "../assets/logos/tailwind-css.svg"
</script>

<div
  class="mt-12 grid max-w-max grid-cols-1 gap-x-4 lg:mt-24 lg:grid-cols-[max-content_minmax(0,_1fr)] lg:gap-y-2"
>
  <img
    class="row-span-6 mx-auto mb-2 w-80 rounded-xl lg:w-[30rem]"
    src="/e-commerce.jpg"
    alt=""
  />

  <h3 class="text-base font-semibold lg:text-lg xl:text-xl">E-commerce</h3>

  <p class="max-w-[60ch] text-base lg:text-lg xl:text-xl">
    Designs de websites podem ser muito complexos, ainda sim, é preciso se
    manter fidedigno ao mesmo tempo escrevendo um código limpo e de fácil
    manutenção.
  </p>

  <a
    target="_blank"
    class="text-base font-semibold lg:text-lg xl:text-xl"
    href="https://codi-andre.github.io/e-commerce/"
    >Ver projeto
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="inline-block w-6"
      ><path
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      /><polyline points="15 3 21 3 21 9" /><line
        x1="10"
        x2="21"
        y1="14"
        y2="3"
      /></svg
    >
  </a>

  <h3 class="text-base lg:text-lg xl:text-xl">Tecnologias:</h3>

  <div class="mt-2 flex gap-4">
    <TechCard
      logoPath={viteLogo}
      caption="vite js"
      link="https://vitejs.dev/"
    />

    <TechCard
      logoPath={reactLogo}
      caption="react js"
      link="https://react.dev/"
    />

    <TechCard
      logoPath={tailwindLogo}
      caption="tailwind"
      link="https://tailwindcss.com/"
    />
  </div>
</div>
