import type { NextPage } from 'next'
import FeaturedPosts from '../components/FeaturedPosts'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="container">
        <div className="app__content">
          <FeaturedPosts />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Home
