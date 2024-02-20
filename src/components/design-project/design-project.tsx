import { NewTabIcon } from "../../assets/icons/new-tab-icon"
import styles from "./design-project.module.css"

export function DesignProject() {
  return (
    <div class={styles.container}>
      <div class={styles.wrapper}>
        <h3 class={`${styles.title} text-xl`}>E-commerce e Pomodoro timer</h3>

        <p class={styles.description}>
          Dando vida ao design das pessoas, ambos os projetos seguem
          rigorosamente a estética proposta por seus criadores e contam com um
          design responsivo.
        </p>

        <p>Compare o e-commerce com seu design original:</p>

        <div class={styles.panel}>
          <a
            class={styles.button}
            target="_blank"
            href="https://codi-andre.github.io/e-commerce/"
          >
            website
            <NewTabIcon class="icon-sm" />
          </a>

          <a
            class={styles.button}
            target="_blank"
            href="https://www.figma.com/community/file/1096834804853006903/powerful-e-commerce-template-for-a-dynamic-shopping-website"
          >
            design <NewTabIcon class="icon-sm" />
          </a>
        </div>

        <p>Compare o timer com seu design original:</p>

        <div class={styles.panel}>
          <a
            class={styles.button}
            target="_blank"
            href="https://codi-andre.github.io/pomodoro-timer/"
          >
            webapp <NewTabIcon class="icon-sm" />
          </a>

          <a
            class={styles.button}
            target="_blank"
            href="https://dribbble.com/shots/6149223-Countdown-Timer-Daily-UI-014"
          >
            design <NewTabIcon class="icon-sm" />
          </a>
        </div>
      </div>

      <img
        class={styles.img}
        loading="lazy"
        src="/design.webp"
        alt=""
        height={480}
        width={640}
      />
    </div>
  )
}
