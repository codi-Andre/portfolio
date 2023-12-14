<script lang="ts">
  import interactivityIcon from "../assets/interactivity.svg"
  import devices from "../assets/devices.jpeg"
  import webDesign from "../assets/web-design.jpg"
  import Card from "./card.svelte"
</script>

<section
  class="mt-20 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-12 xl:mt-40"
>
  <Card
    imgPath={webDesign}
    description="como desenvolvedor meu primeiro foco é criar interfaces
     fidedignas ao design e amigáveis"
  />

  <Card
    imgPath={devices}
    description="design responsivo para preencher as necessidades de um público
     diverso com diferentes dispositivos"
  />

  <Card
    imgPath={interactivityIcon}
    description="e sem esquecer da interatividade para dar vida a web vibrante
     como nós a conhecemos"
  />
</section>
