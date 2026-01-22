import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
const [FirstName, setFirstName] = useState("")
const [LastName, setLastName] = useState("")


  useEffect(() => {console.log("Her Zaman Çalışır")})

  useEffect(() => {console.log("İlk Render Edildiğinde çalışır")}, []) //component mount([]) olduğunda bir kere çalışır

  useEffect(() => {
    console.log("FirstName Değişti")}, [FirstName]) //FirstName değiştiğinde çalışır

    useEffect(() => {
      console.log("LastName Değişti")
              },[LastName])

  return (
    <>
      <div>
       <button onClick={() => setFirstName("Ahmet")}> Adı Değiştir</button>
       <button onClick={() => setLastName("Yılmaz")}> Soyadı Değiştir</button>
      </div>
      
    </>
  )
}

export default App
