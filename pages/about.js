import React from 'react'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import MovieDetails from '../components/MovieDetails'
import PageHeader from '../components/PageHeader'

export default function about({movies}) {
  return (
    <>
    <Card>
      <Card.Body>
        <PageHeader text="About the Developer : Harsh Limbachiya" />
        <Card.Text>
          Hi There, My name is Harsh Limbachiya and I am recently studying Computer Programming and Analysis at Seneca College, looking forward to build amazing React applications. 
        </Card.Text>
          <Link href={`/movies/${movies.title}`}>
            <a>{movies.title}</a>
          </Link>
      </Card.Body>
   
      <MovieDetails movie={movies} />
    </Card>
    
    </>
    
  )
}

 async function loadMovies() {
  // Call an external API endpoint to get movies
  const res = await fetch('https://tame-ruby-eel-boot.cyclic.app/api/movies/573a1390f29313caabcd42e8')
  const data = await res.json()
  return data
}

export async function getStaticProps() {
  const movies = await loadMovies()
  // Movies returned will be passed to the page component
  return { props: { movies } }
}