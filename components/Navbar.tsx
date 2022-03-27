import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.sass'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.nav__container}`}>
        <Link href="/" passHref>
          <Image
            src="/img/logo.svg"
            className={styles.nav__logo}
            width={160}
            height={40}
            alt=""
          />
        </Link>
        <div className={styles.nav__tail}>
          <ul className={styles.nav__menu}>
            <li className={styles.nav__menu__item}>Our story</li>
            <li className={styles.nav__menu__item}>Membership</li>
            <li className={styles.nav__menu__item}>Write</li>
            <li className={styles.nav__menu__item}>Sign In</li>
          </ul>
          <button className={styles.nav__menu__btn}>Get started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
