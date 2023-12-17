<script lang="ts">
  import Card from "./card.svelte"
  import webDesignImg from "../assets/web-design.jpg"
  import devicesImg from "../assets/devices.jpeg"
  import interactivityImg from "../assets/interactivity.svg"
</script>

<section
  class="mt-20 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-12 xl:mt-40"
>
  <Card
    imgPath={webDesignImg}
    description="como desenvolvedor meu primeiro foco é criar interfaces
     fidedignas ao design e amigáveis"
  />

  <Card
    imgPath={devicesImg}
    description="design responsivo para preencher as necessidades de um público
     diverso com diferentes dispositivos"
  />

  <Card
    imgPath={interactivityImg}
    description="e sem esquecer da interatividade para dar vida a web vibrante
     como nós a conhecemos"
  />
</section>
