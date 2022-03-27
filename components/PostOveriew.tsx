import styles from './PostOverview.module.sass'

const PostOveriew = () => {
  return (
    <div className={styles.postOverview}>
      <div>
        <div className={styles.postOverview__header}>
          <div
            className={styles.postOverview__author__avatar}
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJ1c2luZXNzJTIwbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60")`,
            }}
          ></div>
          <div className={styles.postOverview__author__name}>
            Oleh Baranovskyi
          </div>
          <span style={{ margin: '0 4px' }}></span>
          <div className={styles.postOverview__author__name}>Dec 24, 2021</div>
        </div>
        <div className={styles.postOverview__name}>
          Top 5 techniques in TypeScript to bring your code to the next level.
        </div>
        <div className={styles.postOverview__description}>
          Write better code with refactoring and functional approaches — With
          time and practice, we all deliver code with better quality. However,
          there is always room for improvement. Whenever I look at the code that
          I wrote half of the year ago, and I don’t know how to improve it, I
          think about two things. Either I didn’t grow, or…
        </div>
        <div className={styles.postOverview__footer}>
          <div className={styles.postOverview__footer__left}>
            <div className={styles.postOverview__tag}>TypeScript</div>6 min read
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              style={{ marginRight: 8 }}
            >
              <path
                d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                fill="#000"
              ></path>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                fill="#000"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={styles.postOverview__image}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80")`,
        }}
      ></div>
    </div>
  )
}

export default PostOveriew
