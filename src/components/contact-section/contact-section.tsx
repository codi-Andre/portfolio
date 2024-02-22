import styles from "./contact-section.module.css"
import githubLogo from "../../assets/images/github.svg"
import gmailLogo from "../../assets/images/gmail.svg"
import linkedInLogo from "../../assets/images/linkedin.svg"

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
          <img src={linkedInLogo} alt="linkedIn" height={48} width={48} />
        </a>
        <a
          class={styles.link}
          target="_blank"
          href="mailto:uefs.andre@gmail.com"
        >
          <img src={gmailLogo} alt="gmail" height={48} width={48} />
        </a>
        <a
          class={styles.link}
          target="_blank"
          href="https://www.github.com/codi-andre"
        >
          <img
            class={styles["github-icon"]}
            src={githubLogo}
            alt="github"
            height={48}
            width={48}
          />
        </a>
      </address>
    </footer>
  )
}
