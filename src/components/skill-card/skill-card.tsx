import styles from "./skill-card.module.css"

interface SkillCardProps {
  image: string
  title: string
}

export function SkillCard(props: SkillCardProps) {
  return (
    <figure class={styles.container}>
      <img class={styles.img} src={props.image} alt="" />
      <figcaption class={styles.title}>{props.title}</figcaption>
    </figure>
  )
}
