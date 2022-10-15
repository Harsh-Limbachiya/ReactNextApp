import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function MovieDetails({movie}) {
  return (
    <Container>
      <Row>
        {
          movie.poster&&(
            <Col md>
              <img src={movie.poster} alt="poster" className="w-100" />
              <br /><br />
            </Col>
          )
        }
         <Col md>
          <strong>Directed By:</strong> {movie.directors}<br/><br/>
<p>{movie.fullplot}</p>
<strong>Cast:</strong> { movie.cast ? movie.cast.join() : "N/A" } <br/><br/>
<strong>Awards:</strong> {movie?.awards?.text} <br/>
            <strong>IMDB Rating:</strong> {movie?.imdb?.rating}  <span>(<strong>{movie?.imdb?.votes}</strong> votes)</span>
          </Col>
      </Row>
    </Container>
  )
}
