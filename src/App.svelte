<script lang="ts">
  import AboutMe from "./components/about-me.svelte"
  import Contact from "./components/contact.svelte"
  import Header from "./components/header.svelte"
  import Projects from "./components/projects.svelte"
  import Services from "./components/services.svelte"
  import Workflow from "./components/workflow.svelte"
</script>

<Header />
<main class="container">
  <Services />

  <Projects />

  <Workflow />

  <AboutMe />
</main>
<footer class="container mt-20 xl:mt-40">
  <Contact />
</footer>
