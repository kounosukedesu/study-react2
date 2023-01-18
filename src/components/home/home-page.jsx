import Image from "next/image"
import Link from "next/link"
import styles from '/styles/Home.module.css'


export const HomePage = ({ data }) => (
  <main className={styles.main}>
  {data.map( ev => (
    <Link key={ev.id} href={`/events/${ev.id}`}>
      <Image width={300} height={300} alt={ev.title} src={ev.image} priority={true} />
      <h2>{ev.title}</h2>
      <p>{ev.description}</p>
      </Link>
    ))}
</main>
)
