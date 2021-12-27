import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Axolotl Services</title>
        <meta name="description" content="Axolotl Services: Providing high quality Minecraft servers, plugins, presets, and much more." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <Image src="/favicon.png" width={150} height={150} alt="Axolotl" />

        <h1 className={styles.title}>
          Welcome to <span className='pink'>Axolotl Services</span>!
        </h1>

        <div className={styles.grid}>

            <Link href="/about/">
                <a className={styles.card}>
                <h2>About</h2>
                <p>Information about who we are, what we do, and how we do it.</p>
                </a>
          </Link>
          <Link href="/services/">
                <a className={styles.card}>
                <h2>Services</h2>
                <p>All the services we offer, their prices, and other information about them.</p>
                </a>
          </Link>
          <Link href="/team/">
                <a className={styles.card}>
                <h2>Team</h2>
                <p>All our employees that provide you an amazing experience.</p>
                </a>
          </Link>
          

        </div>

        <p className={styles.description}>
          For more information, join our{' '}
          <a href='https://discord.gg/invite/web/axolotl/homepage/ccsmZX7Tty' className={styles.code}>Discord server</a>
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
