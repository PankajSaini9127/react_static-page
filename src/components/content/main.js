import React from 'react'
import "./main.css"
import Address from './subcontent/address'
import Product from './subcontent/product'
import Services from './subcontent/Services'
import Dealership from './subcontent/Dealership'


export default function Main() {
  return (
    <>
       
    <div className="container">
        <div className="row main ">
        <Address /> 
            <div className="col-4 sidebar">
                <Product />
            </div>
            <div className="col-4 sidebar ">
                  <Services />
            </div>
            <div className="col-4 sidebar">
                 <Dealership />
            </div>
           
        </div>
    </div>
    </>
  )
}
