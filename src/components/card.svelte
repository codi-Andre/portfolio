<script lang="ts">
  export let imgPath: string
  export let description: string
</script>

<div
  class="flex max-w-[20rem] flex-col items-center justify-center rounded-xl
   bg-design-secondary px-4 py-8 text-center"
>
  <img class="w-20 rounded-full" src={imgPath} alt="" />

  <p class="mt-6 text-base lg:text-lg">
    {description}
  </p>
</div>
