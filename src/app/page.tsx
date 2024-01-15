// import { CSR } from './csr'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          <li>
            <a href="/csr">CSR (Client Side Rendering)</a>
          </li>
          <li>
            <a href="/ssr">SSR (Server Side Rendering)</a>
          </li>
          <li>
            <a href="/ssg">SSG (Static Site Generator)</a>
          </li>
          <li>
            <a href="/isr">ISR (Incremental Static Generation</a>
          </li>
        </ul>
      </nav>
    </main>
  )
}