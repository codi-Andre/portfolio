<script>
  import ECommerce from "./e-commerce.svelte"
  import ShoppingList from "./shopping-list.svelte"
  import Timer from "./timer.svelte"
</script>

<section class="mt-20 xl:mt-40">
  <h2 class="text-2xl font-semibold lg:text-3xl xl:text-4xl">Projetos</h2>
  <p class="mt-6 max-w-[70ch] text-base lg:text-lg xl:text-xl">
    Desenvolver projetos paralelos ajuda o programador a aprender habilidades
    necessárias para lidar com os problemas do dia a dia.
  </p>

  <ECommerce />

  <ShoppingList />

  <Timer />
</section>
