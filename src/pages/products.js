import React from 'react'
import Layout from '../components/layout'
import styles from '../components/products.module.css';

const products = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is our products</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo incidunt beatae dolore porro? Voluptatem quod pariatur reprehenderit numquam excepturi, saepe veritatis natus repellendus ullam eos!</p>
            </div>
        </Layout>
    )
}

export default products
