import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = ({movie,deletCard,seen}) => {
    console.log(movie.id)
 
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
      {movie.description}
      </Card.Text>
      <button onClick={()=>deletCard(movie.id)}>delete card</button>
      <button  onClick={()=>seen(movie.id)} >  {movie.isDone ? 'seen' : 'not yet '}  </button>
      <button><Link to={`/MovieList/${movie.id}`}> Samsoum</Link > </button>
    </Card.Body>
  </Card>
  )
}

export default MovieCard