import styles from "./hero-section.module.css"
import profileImg from "../../assets/images/profile.webp"

export function HeroSection() {
  return (
    <section class={styles.section}>
      <img
        class={styles["profile-pic"]}
        src={profileImg}
        alt="profile"
        height={240}
        width={240}
      />

      <div class={styles.wrapper}>
        <p class={`${styles.subtitle}`}>Olá meu nome é André,</p>

        <h1 class={`${styles.title} text-5xl`}>Desenvolvedor Front-end,</h1>

        <p class={styles.description}>
          eu construo websites e aplicativos web com lindas e amigáveis
          interfaces que podem ser acessados por diferentes dispositivos e
          plataformas.
        </p>
      </div>
    </section>
  )
}
