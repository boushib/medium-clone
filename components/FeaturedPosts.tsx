import PostOveriew from './PostOveriew'

const FeaturedPosts = () => {
  return (
    <main>
      {[1, 2, 3, 4].map(p => (
        <PostOveriew key={p} />
      ))}
    </main>
  )
}

export default FeaturedPosts
