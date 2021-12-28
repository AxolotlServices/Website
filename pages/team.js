import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Team | Axolotl Services</title>
        <meta name="description" content="Axolotl Services: Providing high quality Minecraft servers, plugins, presets, and much more." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <Image src="/favicon.png" width={150} height={150} alt="Axolotl" />

        <h1 className={styles.title}>
          Team
        </h1>

        <footer className={styles.footer_wide}>
            <h2 className={styles.title_small}>Management</h2>
        </footer>

        <div className={styles.grid}>

            <a className={styles.card_hoverless}>
                <Image src="/team_pictures/Acevix.jpg" width={150} height={150} alt="Avatar" id='circular' />
                <h2>Acevix</h2>
                <p className='team_rank'>Product Manager</p>
            </a>

            <a className={styles.card_hoverless}>
                <Image src="/team_pictures/Lavender.png" width={150} height={150} alt="Avatar" id='circular' />
                <h2>Lavender</h2>
                <p className='team_rank'>Customer Service</p>
            </a>

            <a className={styles.card_hoverless}>
                <Image src="/team_pictures/illuminator3.webp" width={150} height={150} alt="Avatar" id='circular' />
                <h2>illuminator3</h2>
                <p className='team_rank'>Development</p>
            </a>

            <a className={styles.card_hoverless}>
                <Image src="/team_pictures/eros.png" width={150} height={150} alt="Avatar" id='circular' />
                <h2>Eros</h2>
                <p className='team_rank'>Customer Service</p>
            </a>

            <a className={styles.card_hoverless}>
                <Image src="/team_pictures/Golden.png" width={150} height={150} alt="Avatar" id='circular' />
                <h2>Golden</h2>
                <p className='team_rank'>Staff & Discord</p>
            </a>

        </div>

        <footer className={styles.footer_wide}>
            <h2 className={styles.title_small}>Staff</h2>
        </footer>

        <div className={styles.grid}>

        <a className={styles.card_hoverless}>
            <Image src="/team_pictures/quack.png" width={150} height={150} alt="Avatar" id='circular' />
            <h2>Quack</h2>
            <p className='team_rank_orange'>Website Developer</p>
        </a>

        <a className={styles.card_hoverless}>
            <Image src="/team_pictures/Camil.png" width={150} height={150} alt="Avatar" id='circular' />
            <h2>Camil</h2>
            <p className='team_rank_orange'>Support</p>
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
