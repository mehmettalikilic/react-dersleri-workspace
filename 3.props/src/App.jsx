import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
 
const productName  = 'buzdolabı'
  return (
    
      <div>
       <Product productName = "Ayakabı" price = {3200}/>
        <Product productName = "Tişört" price = {1500}/>

        <Product productName = {productName} price = {15000}/>
        <hr />  


   


        <Container>  
          {/* app -> continer -> product mofülünü çağırıyoruz */}
          
          <Product productName = "Telefon" price = {2500}/>
        </Container> 
      </div>
      
    
  )
}

export default App
