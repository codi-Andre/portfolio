<script lang="ts">
  import TechCard from "./tech-card.svelte"
  import nextIcon from "../assets/logos/next-js.svg"
  import reduxIcon from "../assets/logos/redux.svg"
  import shoppingImg from "../assets/shopping-list.png"
</script>

<div
  class="lg:grid-cols-[minmax(0, 75ch)_minmax(0,_1fr)] mt-12 grid max-w-max grid-cols-1 gap-x-4 gap-y-2 lg:mt-24"
>
  <h3 class="text-base font-semibold lg:text-lg xl:text-xl">Shopping list</h3>

  <p class="max-w-[60ch] text-base lg:text-lg xl:text-xl">
    Aplicações possuem múltiplos componentes e para compartilhar seu estado
    entre eles, algumas vezes é preciso ferramentas especializadas em
    gerenciamento de estado.
  </p>

  <a
    target="_blank"
    class="text-base font-semibold lg:text-lg xl:text-xl"
    href="https://codi-shopping-list.vercel.app/"
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
      logoPath={nextIcon}
      caption="next js"
      link="https://nextjs.org/"
    />
    <TechCard
      logoPath={reduxIcon}
      caption="redux"
      link="https://redux-toolkit.js.org/"
    />
  </div>

  <img
    class="row-start-1 row-end-7 mx-auto mb-2 w-80 rounded-xl lg:col-start-2 lg:w-[40rem]"
    src={shoppingImg}
    alt=""
  />
</div>
