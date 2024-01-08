import React from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import toutData from '../assets/data/tours'

const TourDetails = () => {
  const { id } = useParams()

  // this is an static data later we will call our API and load our data from database
  const tour = toutData.find((tour) => tour.id == id)

  // distracture properties from tour object
  const {} = tour

  return <div>TourDetails</div>
}

export default TourDetails
