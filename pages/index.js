
import Title from '../pages/movies/title'
import About from '../pages/about'
//import Layout from '../components/Layout'
import MainNav from '../components/MainNav'
import MovieDetails from '../components/MovieDetails'
import PageHeader from '../components/PageHeader'

export default function Home() {
  return (
    <div>
       <MainNav />
       <br/>
      <PageHeader />
      <br />
      <Title/>
      <br />
      <About />
      <br/>
      { /** <Layout/> */}
      <br />
      <MovieDetails />
      
    </div>  
  )
}
