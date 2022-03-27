import styles from './Sidebar.module.sass'

const SidebarPost = () => (
  <div className={styles.sidebar__post}>
    <div className={styles.sidebar__post__author}>
      <div
        className={styles.sidebar__post__author__avatar}
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`,
        }}
      ></div>
      <div className={styles.sidebar__post__author__name}>Mark Denzel</div>
    </div>
    <div className={styles.sidebar__post__title}>
      An Introduction to the useId() Hook in React 18
    </div>
  </div>
)

export default SidebarPost
