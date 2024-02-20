import { StoreProject } from "../store-project/store-project"
import styles from "./projects-section.module.css"

export function ProjectsSection() {
  return (
    <section class={styles.section}>
      <h2 class={`${styles.title} text-3xl`}>Projetos</h2>

      <p class={styles.quote}>
        <q>Talk is cheap. Show me the code.</q>
        <cite> - Linus Torvalds</cite>
      </p>

      <StoreProject />
    </section>
  )
}
