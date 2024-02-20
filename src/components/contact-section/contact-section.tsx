import styles from "./contact-section.module.css"

export function ContactSection() {
  return (
    <footer id="contact" class={`${styles.section} container`}>
      <div>
        <p class={styles.question}>Precisa de um desenvolvedor?</p>
        <p class={styles.cta}>Vamos trabalhar juntos!</p>
      </div>

      <address class={styles.social}>
        <a
          class={styles.link}
          target="_blank"
          href="https://www.linkedin.com/in/andre-web-dev"
        >
          <img src="/linkedin.svg" alt="linkedIn" height={48} width={48} />
        </a>
        <a
          class={styles.link}
          target="_blank"
          href="mailto:uefs.andre@gmail.com"
        >
          <img src="/gmail.svg" alt="gmail" height={48} width={48} />
        </a>
        <a
          class={styles.link}
          target="_blank"
          href="https://www.github.com/codi-andre"
        >
          <img
            class={styles["github-icon"]}
            src="/github.svg"
            alt="github"
            height={48}
            width={48}
          />
        </a>
      </address>
    </footer>
  )
}
