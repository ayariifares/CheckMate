import React from 'react'
import { moviesData } from '../MovieData';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
const UniqueElement = ({Movie}) => {

    const {ID}=useParams();
const film=Movie.find((el)=>el.id===Number(ID))
  return (
    <div>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={film.image} />
    <Card.Body>
      <Card.Title>{film.name}</Card.Title>
      <Card.Text>
      {film.description}
      </Card.Text>
      
      
    </Card.Body>
  </Card>
    </div>
  )
}

export default UniqueElement