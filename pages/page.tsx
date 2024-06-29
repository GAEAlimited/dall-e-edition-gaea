import { Redis } from '@upstash/redis'
import styles from './page.module.css'

export const revalidate = 0 // disable cache

const redis = new Redis({
    url: 'https://ideal-toucan-49306.upstash.io',
    token: 'AcCaAAIncDE2MTMwYWE4ODRmZTY0ZjNkODNiOTg3MjUzMzdhYWE1OXAxNDkzMDY',
  })

export default async function Home() {
  const member = await redis.srandmember<string>("nextjs14")

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {member}
        </h1>
        <p className={styles.description}>
          You have been randomly chosen by the redis algorithm.
        </p>
      </main>
    </div>
  )
}
