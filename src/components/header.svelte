<script lang="ts">
  import DarkMode from "./dark-mode.svelte"
  import Hero from "./hero.svelte"
  import MobileNav from "./mobile-nav.svelte"
</script>

<header class="container">
  <nav class="hidden justify-between sm:flex">
    <ul
      class="flex items-center gap-4 text-base font-medium lg:text-lg"
      role="list"
    >
      <li>
        <a
          class="inline-block border-sky-400 p-4 hover:border-b-4 hover:pb-3"
          href="#projects">Projetos</a
        >
      </li>

      <li>
        <a
          class="inline-block border-sky-400 p-4 hover:border-b-4 hover:pb-3"
          href="#about">Sobre mim</a
        >
      </li>

      <li>
        <a
          class="inline-block border-sky-400 p-4 hover:border-b-4 hover:pb-3"
          href="#contact">Contato</a
        >
      </li>
    </ul>

    <ul
      class="flex items-center gap-4 text-base font-medium lg:text-lg"
      role="list"
    >
      <li>
        <DarkMode />
      </li>

      <li>
        <a
          class="inline-block border-sky-400 p-4 hover:border-b-4 hover:pb-3"
          href="http://www.linkedin.com/in/andre-web-dev">LinkedIn</a
        >
      </li>
    </ul>
  </nav>

  <MobileNav />

  <Hero />
</header>
