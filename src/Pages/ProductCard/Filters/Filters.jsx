import React from 'react'
import Accordians from './Accordians';
import PriceRange from "./PriceRange"
const Filters = ({data}) => {
    console.log(data)
  return (
    <div>
  <Accordians data={data}/>
  
    </div>
  )
}

export default Filters