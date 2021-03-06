import styles from './Hero.module.sass'

const Hero = () => (
  <div className={styles.hero}>
    <div className={`container ${styles.hero__container}`}>
      <div>
        <h1 className={styles.hero__heading}>Stay curious</h1>
        <p className={styles.hero__subheading}>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className={`btn ${styles.hero__btn}`}>Start reading</button>
      </div>
      {/* <svg
        fill="#fff"
        className={styles.hero__icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="500px"
        height="500px"
      >
        <path d="M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z" />
      </svg> */}
      <img src="/img/hero-graphic.png" className={styles.hero__image} alt="" />
    </div>
  </div>
)

export default Hero
