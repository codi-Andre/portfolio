<script>
  import DarkMode from "./dark-mode.svelte"

  let isNavOpen = false

  function toggleMenu() {
    if (isNavOpen) {
      isNavOpen = false
      document.body.style.overflowY = "auto"
    } else {
      isNavOpen = true
      document.body.style.overflowY = "hidden"
    }
  }
</script>

<nav class="relative flex items-center justify-end gap-4 sm:hidden">
  <DarkMode />

  <button
    class="p-4"
    aria-label={`${isNavOpen ? "open" : "close"} navigation menu`}
    on:click={toggleMenu}
  >
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
      class="h-8 w-8"
      ><line x1="4" x2="20" y1="12" y2="12" /><line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
      /><line x1="4" x2="20" y1="18" y2="18" /></svg
    >
  </button>

  {#if isNavOpen}
    <ul
      class="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center
       gap-4 bg-design-bg"
      role="list"
    >
      <li>
        <button
          class="absolute right-0 top-0 p-4"
          aria-label="close navigation menu"
          on:click={toggleMenu}
        >
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
            class="h-8 w-8"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
          >
        </button>
      </li>

      <li><a on:click={toggleMenu} href="#projects">Projetos</a></li>

      <li><a on:click={toggleMenu} href="#about">Sobre</a></li>

      <li><a on:click={toggleMenu} href="#contact">Contato</a></li>

      <li>
        <a on:click={toggleMenu} href="http://www.linkedin.com/in/andre-web-dev"
          >LinkedIn</a
        >
      </li>
    </ul>
  {/if}
</nav>

<style>
  a {
    display: inline-block;
    padding: 1rem;
  }
</style>
