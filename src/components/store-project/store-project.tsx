import { NewTabIcon } from "../../assets/icons/new-tab-icon"
import styles from "./store-project.module.css"
import storeImg from "../../assets/images/store.webp"

export function StoreProject() {
  return (
    <div class={styles.container}>
      <img
        class={styles.img}
        loading="lazy"
        src={storeImg}
        alt=""
        height={480}
        width={640}
      />

      <div class={styles.wrapper}>
        <h3 class={`${styles.title} text-2xl`}>Online store</h3>

        <p class={styles.description}>
          Uma loja online com um visual vibrante, com busca de produtos, pagina
          de detalhes do produto e carrinho de compras
        </p>

        <a
          class={styles.button}
          target="_blank"
          href="https://codi-store.vercel.app/"
        >
          Store website
          <NewTabIcon class="icon-sm" />
        </a>
      </div>
    </div>
  )
}
