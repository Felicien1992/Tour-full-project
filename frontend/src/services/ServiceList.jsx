import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    id: 1,
    imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'Lorem ipsum dolor sit emet, consectetur adipicing elit.',
  },
  {
    id: 2,
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Lorem ipsum dolor sit emet, consectetur adipicing elit.',
  },
  {
    id: 3,
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Lorem ipsum dolor sit emet, consectetur adipicing elit.',
  },
]

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <Col lg="3" key={item.id}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  )
}

export default ServiceList
