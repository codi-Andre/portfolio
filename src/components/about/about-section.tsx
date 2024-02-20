import { SkillCard } from "../skill-card/skill-card"
import styles from "./about-section.module.css"
import jsIcon from "../../assets/logos/javascript.svg"
import htmlIcon from "../../assets/logos/html.svg"
import cssIcon from "../../assets/logos/css.svg"
import tsIcon from "../../assets/logos/typescript.svg"
import reactIcon from "../../assets/logos/react.svg"
import solidIcon from "../../assets/logos/solid.svg"
import gitIcon from "../../assets/logos/git.svg"
import twIcon from "../../assets/logos/tailwind-css.svg"

export function AboutSection() {
  return (
    <section class={styles.section}>
      <div class={styles["left-col"]}>
        <h2 class={`${styles.title} text-xl`}>Um pouco sobre mim...</h2>

        <p class={styles.description}>
          Tive a oportunidade de ser orientado por uma pessoa com muito talento
          e uma longa carreira na área. Nós trabalhamos juntos em alguns
          projetos e foi um grande aprendizado para mim.
        </p>

        <p class={styles.description}>
          Trabalhar em equipe torna os projetos mais interessantes, por isso
          procuro ter uma mente aberta a novas ideias e receber críticas sempre
          de forma construtiva e procuro levar ao ambiente onde estou, uma nova
          perspectiva sobre as coisas.
        </p>
      </div>

      <div class={styles["right-col"]}>
        <h3 class={`${styles.title} text-xl`}>Linguagens</h3>
        <ul class={styles.list}>
          <li>
            <SkillCard image={jsIcon} title="Javascript" />
          </li>
          <li>
            <SkillCard image={htmlIcon} title="HTML" />
          </li>
          <li>
            <SkillCard image={cssIcon} title="CSS" />
          </li>
          <li>
            <SkillCard image={tsIcon} title="Typescript" />
          </li>
        </ul>

        <h3 class={`${styles.title} text-xl`}>Frameworks</h3>

        <ul class={styles.list}>
          <li>
            <SkillCard image={reactIcon} title="React" />
          </li>
          <li>
            <SkillCard image={solidIcon} title="Solid" />
          </li>
        </ul>

        <h3 class={`${styles.title} text-xl`}>Outras tecnologias</h3>

        <ul class={styles.list}>
          <li>
            <SkillCard image={gitIcon} title="Git" />
          </li>
          <li>
            <SkillCard image={twIcon} title="Tailwind" />
          </li>
        </ul>
      </div>
    </section>
  )
}
