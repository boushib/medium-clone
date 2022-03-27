import SearchInput from './SearchInput'
import styles from './Sidebar.module.sass'
import SidebarPost from './SidebarPost'

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <button className={`btn ${styles.sidebar__cta}`}>
      Get unlimited access
    </button>
    <SearchInput style={{ marginBottom: 32 }} />
    <h2 className={styles.sidebar__heading}>Recommended posts</h2>
    <div style={{ marginBottom: 32 }}>
      <SidebarPost />
      <SidebarPost />
      <SidebarPost />
    </div>
    <h2 className={styles.sidebar__heading}>Recommended topics</h2>
    <div className={styles.sidebar__tags}>
      <div className={styles.sidebar__tag}>Business</div>
      <div className={styles.sidebar__tag}>Technology</div>
      <div className={styles.sidebar__tag}>Sychology</div>
      <div className={styles.sidebar__tag}>Art</div>
      <div className={styles.sidebar__tag}>Science</div>
      <div className={styles.sidebar__tag}>Programming</div>
      <div className={styles.sidebar__tag}>Sport</div>
    </div>
  </aside>
)

export default Sidebar
