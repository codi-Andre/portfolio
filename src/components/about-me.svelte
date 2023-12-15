<script lang="ts">
  let tabOpen = 0
</script>

<section id="about" class="mt-20 flex flex-col gap-4 lg:mt-40">
  <h2 class="text-2xl font-semibold lg:text-3xl xl:text-4xl">Sobre mim</h2>

  <nav>
    <ul role="list" class="flex gap-4">
      <li>
        <button on:click={() => (tabOpen = 0)}>educação</button>
      </li>

      <li>
        <button on:click={() => (tabOpen = 1)}>habilidades interpessoais</button
        >
      </li>

      <li>
        <button on:click={() => (tabOpen = 2)}>tecnologias que utilizo</button>
      </li>
    </ul>
  </nav>
  {#if tabOpen === 0}
    <p class="max-w-[60ch] text-base lg:text-lg xl:text-xl">
      Eu não cursei o ensino superior, entretanto isto não detém um "autodidata"
      determinado, a internet é uma biblioteca aberta a aqueles com vontade de
      aprender.
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
        Aprendo com meus erros e acertos, assim também com os de outras pessoas.
      </li>

      <li>
        Acredito que a dificuldade está presente em tudo aquilo que é valioso
        aprender.
      </li>
    </ul>
  {:else if tabOpen === 2}
    <p>outras tecnologias que utilizo mas não aparecem nos projetos...</p>
  {/if}
</section>
