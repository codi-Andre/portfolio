<script lang="ts">
  import TechCard from "./tech-card.svelte"

  let tabOpen = 0
</script>

<section
  id="about"
  class="mt-20 grid grid-cols-1 gap-x-16 gap-y-6 lg:mt-40 lg:grid-cols-2"
>
  <h2 class="text-2xl font-semibold lg:col-span-2 lg:text-3xl xl:text-4xl">
    Sobre mim
  </h2>

  <nav>
    <ul
      role="list"
      class="flex gap-4 text-base font-semibold lg:text-lg xl:text-xl"
    >
      <li>
        <button
          class="{tabOpen === 0 ? 'border-b-4' : ''} border-sky-500"
          on:click={() => (tabOpen = 0)}>educação</button
        >
      </li>

      <li>
        <button
          class="{tabOpen === 1 ? 'border-b-4' : ''} border-sky-500"
          on:click={() => (tabOpen = 1)}>habilidades interpessoais</button
        >
      </li>
    </ul>
  </nav>
  <div class="flex flex-col gap-4 lg:row-start-3">
    {#if tabOpen === 0}
      <p class="max-w-[60ch] text-base lg:text-lg xl:text-xl">
        Eu não cursei o ensino superior, entretanto isto não detém um
        "autodidata" determinado, a internet é uma biblioteca aberta a aqueles
        com vontade de aprender.
      </p>

      <p class="max-w-[60ch] text-base lg:text-lg xl:text-xl">
        Há também pessoas com vontade de compartilhar seu conhecimento,uma das
        quais tive a oportunidade de aprender com. Um desenvolvedor sênior muito
        talentoso.
      </p>

      <p class="max-w-[60ch] text-base lg:text-lg xl:text-xl">
        Ele convidou-me a participar de alguns de seus projetos, e tem sido um
        grande aprendizado para mim, suas orientações e criticas ajudaram-me a
        crescer como profissional e pessoa.
      </p>
    {:else if tabOpen === 1}
      <ul
        role="list"
        class="flex list-disc flex-col gap-4 text-base lg:text-lg xl:text-xl"
      >
        <li>Tenho uma mente aberta a novas ideias.</li>

        <li>
          Procuro ver sempre de forma construtiva todas as crítica que recebo.
        </li>

        <li>
          Aprendo com meus erros e acertos, assim também com os de outras
          pessoas.
        </li>

        <li>
          Acredito que a dificuldade está presente em tudo aquilo que é valioso
          aprender.
        </li>
      </ul>
    {/if}
  </div>

  <h3 class="mb-4 text-center text-base font-semibold lg:text-lg xl:text-xl">
    Tecnologias que utilizei recentemente
  </h3>

  <ul
    class="mx-auto grid max-w-max grid-cols-3 content-start gap-4 sm:grid-cols-4"
    role="list"
  >
    <li>
      <TechCard
        logoPath="/logos/svelte.svg"
        caption="svelte"
        link="https://svelte.dev/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/typescript.svg"
        caption="typescript"
        link="https://www.typescriptlang.org/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/tailwind-css.svg"
        caption="tailwind"
        link="https://tailwindcss.com/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/vite.svg"
        caption="vite js"
        link="https://vitejs.dev/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/vitest.svg"
        caption="vitest"
        link="https://vitest.dev/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/solid.svg"
        caption="solid js"
        link="https://www.solidjs.com/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/react.svg"
        caption="native"
        link="https://reactnative.dev/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/react.svg"
        caption="react"
        link="https://react.dev/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/next-js.svg"
        caption="next js"
        link="https://nextjs.org/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/redux.svg"
        caption="redux"
        link="https://redux-toolkit.js.org/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/git.svg"
        caption="git"
        link="https://git-scm.com/"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/html.svg"
        caption="html"
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/css.svg"
        caption="css"
        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
      />
    </li>

    <li>
      <TechCard
        logoPath="/logos/javascript.svg"
        caption="javascript"
        link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />
    </li>
  </ul>
</section>
