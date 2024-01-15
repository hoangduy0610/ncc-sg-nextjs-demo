"use client";
import { useEffect, useState } from 'react'
import styles from '@/app/page.module.css';
import RootLayout from '@/app/layout';
import PageLayout from './layout';

export default function CSR() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1')
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            setData(result[0])
        }

        fetchData().catch((e) => {
            // handle the error as needed
            console.error('An error occurred while fetching the data: ', e)
        })
    }, [])

    return <PageLayout><main className={styles.main}> <p>{data ? data : 'Loading...'}</p> </main></PageLayout>
}