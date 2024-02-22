import styles from "./desktop-nav.module.css"

export function DesktopNav() {
  return (
    <nav class={styles.nav}>
      <ul class={`${styles.list} text-xl`}>
        <li>
          <a class={styles.link} href="#projects">
            Projetos
          </a>
        </li>

        <li>
          <a class={styles.link} href="#about">
            Sobre
          </a>
        </li>

        <li>
          <a class={styles.link} href="#contact">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}
