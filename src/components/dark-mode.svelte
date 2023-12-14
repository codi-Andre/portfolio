<script lang="ts">
  import { onMount } from "svelte"

  let isDarkMode = true

  onMount(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      isDarkMode = true
    } else {
      document.documentElement.classList.remove("dark")
      isDarkMode = false
    }
  })

  function toggleDarkMode() {
    if (isDarkMode) {
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
    } else {
      localStorage.theme = "light"
      document.documentElement.classList.remove("dark")
    }
  }
</script>

<label
  class="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-neutral-200 dark:bg-neutral-700"
  aria-label="switch theme"
>
  <span class="sr-only">toggle theme</span>
  <input
    class="peer h-0 w-0 opacity-0"
    type="checkbox"
    bind:checked={isDarkMode}
    on:change={toggleDarkMode}
  />
  <span
    class="absolute left-1 top-1 rounded-full bg-neutral-100
     text-neutral-900 duration-300 ease-linear peer-checked:translate-x-6 dark:bg-black dark:text-white"
  >
    {#if isDarkMode}
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
        ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /><path
          d="M19 3v4"
        /><path d="M21 5h-4" /></svg
      >
    {:else}
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
        ><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path
          d="M12 20v2"
        /><path d="m4.93 4.93 1.41 1.41" /><path
          d="m17.66 17.66 1.41 1.41"
        /><path d="M2 12h2" /><path d="M20 12h2" /><path
          d="m6.34 17.66-1.41 1.41"
        /><path d="m19.07 4.93-1.41 1.41" /></svg
      >
    {/if}
  </span>
</label>
