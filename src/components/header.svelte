<script lang="ts">
  import DarkMode from "./dark-mode.svelte"
  import Hero from "./hero.svelte"
  import MobileNav from "./mobile-nav.svelte"
</script>

<header class="container">
  <nav class="hidden justify-between sm:flex">
    <ul class="flex items-center gap-4" role="list">
      <li><a href="#projects">Projetos</a></li>

      <li><a href="#about">Sobre mim</a></li>

      <li><a href="#contact">Contato</a></li>
    </ul>

    <ul class="flex items-center gap-4" role="list">
      <li>
        <DarkMode />
      </li>

      <li>
        <a href="http://www.linkedin.com/in/andre-web-dev">LinkedIn</a>
      </li>
    </ul>
  </nav>

  <MobileNav />

  <Hero />
</header>

<style>
  a {
    display: inline-block;
    padding: 1rem;
  }
</style>
