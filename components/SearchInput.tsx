import styles from './SearchInput.module.sass'

type Props = {
  style?: React.CSSProperties
}

const SearchInput = ({ style }: Props) => {
  return (
    <div className={styles.searchInput} style={style}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="#080808"
        style={{ margin: '0 12px' }}
      >
        <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z"></path>
      </svg>
      <input type="text" placeholder="Search..." />
    </div>
  )
}

export default SearchInput
