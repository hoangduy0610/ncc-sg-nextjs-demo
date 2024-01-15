import styles from '@/app/page.module.css';
import PageLayout from './layout';
export default function ISR({ data }: any) {
    return <PageLayout><main className={styles.main}> <p>{data ? data : 'Loading...'}</p> </main></PageLayout>
}

// This function gets called at build time
export async function getStaticProps() {
    const res = await fetch('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1')
    const data = await res.json()

    return {
        props: {
            data: data[0],
        },
        revalidate: 10,
    }
}