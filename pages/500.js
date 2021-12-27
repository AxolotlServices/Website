/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>500 | Axolotl Services</title>
        <meta name="description" content="Axolotl Services: Providing high quality Minecraft servers, plugins, presets, and much more." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <Image src="/favicon.png" width={150} height={150} alt="Axolotl" />

        <h1 className={styles.title}>
          Something seems to have gone wrong.<br /><span className='pink'>A server-side error occured!</span>
        </h1>

        <p className={styles.description}>
          Go back to the{' '}
          <a href='/' className={styles.code}>Home Page</a>
        </p>

      </main>

      <footer className={styles.footer}>
        <p>
          © Axolotl Services 2022. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
