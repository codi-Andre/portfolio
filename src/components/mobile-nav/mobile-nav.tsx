import { Show, createSignal } from "solid-js"
import { MenuIcon } from "../../assets/icons/menu-icon"
import styles from "./mobile-nav.module.css"

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false)

  return (
    <nav class={styles.nav}>
      <button
        onClick={() => setIsMenuOpen((state) => !state)}
        class={styles["menu-button"]}
        aria-label="toggle menu"
      >
        <MenuIcon class="icon-lg" />
      </button>

      <Show when={isMenuOpen()}>
        <ul class={styles.menu}>
          <li>
            <a
              onClick={() => setIsMenuOpen(false)}
              class={styles.link}
              href="#projects"
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              onClick={() => setIsMenuOpen(false)}
              class={styles.link}
              href="#about"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              onClick={() => setIsMenuOpen(false)}
              class={styles.link}
              href="#contact"
            >
              Contato
            </a>
          </li>
        </ul>
      </Show>
    </nav>
  )
}
