<script lang="ts">
  export let logoPath: string
  export let caption: string
  export let link: string
</script>

<a target="_blank" href={link}>
  <figure
    class="inline-flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-design-secondary"
  >
    <img class="h-auto w-8" src={logoPath} alt="" />
    <caption class="text-base lg:text-lg xl:text-xl">{caption}</caption>
  </figure>
</a>
