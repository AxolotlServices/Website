import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Credits | Axolotl Services</title>
        <meta name="description" content="Axolotl Services: Providing high quality Minecraft servers, plugins, presets, and much more." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <Image src="/favicon.png" width={150} height={150} alt="Axolotl" />

        <h1 className={styles.title}>
          Credits
        </h1>

        <div className={styles.grid}>

        <a className={styles.card_hoverless}>
            <Image src="/team_pictures/quack.png" width={150} height={150} alt="Avatar" id='circular' />
            <h2>Quack</h2>
            <p className='team_rank'>Built the website</p>
        </a>

        <a className={styles.card_hoverless}>
            <Image src="/team_pictures/Acevix.jpg" width={150} height={150} alt="Avatar" id='circular' />
            <h2>Acevix</h2>
            <p className='team_rank'>Idea of the company</p>
        </a>

        </div>

        {/* <p className={styles.description}>
          For more information, join our{' '}
          <a href='https://discord.gg/invite/web/axolotl/homepage/ccsmZX7Tty' className={styles.code}>Discord server</a>
        </p> */}

      </main>

      <footer className={styles.footer}>
        <p>
          © Axolotl Services 2022. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}
