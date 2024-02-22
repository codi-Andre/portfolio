import styles from "./header.module.css"

import { DesktopNav } from "../desktop-nav/desktop-nav"
import { MobileNav } from "../mobile-nav/mobile-nav"
import { MessageIcon } from "../../assets/icons/message-icon"

export function Header() {
  return (
    <header class={`${styles["header"]} container`}>
      <DesktopNav />

      <a
        class={`${styles["cta-button"]} text-xl`}
        href="https://www.linkedin.com/in/andre-web-dev"
      >
        <span class={styles["cta-title"]}>Fale comigo</span>
        <MessageIcon class={styles["cta-icon"]} />
      </a>

      <MobileNav />
    </header>
  )
}
