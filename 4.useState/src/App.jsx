import { useState } from 'react'

import './App.css'

function App() {
  const [firstName, setFirstName] = useState("Mehmet") // State tanımlama değişken değerlerin ilk değerleri burda tanımlanır state aynı zamnda bir hooks(fonksiyona yetenek kazandırır) tur 


  const [lastName, setLastName] = useState("Kılıç")
  return (
    <>
      <div>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
      <div>
        <button onClick={() => setFirstName("Ahmet")}>İsim Değiştir</button>
        <button onClick={() => setLastName("Yılmaz")}>Soyisim Değiştir</button>
      </div>
    </>
  )
}

export default App
