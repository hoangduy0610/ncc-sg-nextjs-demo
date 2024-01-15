import styles from '@/app/page.module.css';
import PageLayout from './layout';
export default function SSR({ data }: any) {
    return <PageLayout><main className={styles.main}> <p>{data ? data : 'Loading...'}</p> </main></PageLayout>
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data: data[0] } }
}