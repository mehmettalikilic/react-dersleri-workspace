import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [vize1, setVize1] = useState(100);
 const [vize2, setVize2] = useState(100);

 const oratalamaBul = () => {
  debugger;
    const toplamSonuc = topla()/2;
    yazdır(toplamSonuc);
 }

 const topla = () => { 
  const toplam = vize1 + vize2;
  debugger;
  return toplam 

 }

const yazdır = (sonuc) => { 
  debugger;   
  console.log("Ortalama", sonuc);}

  return (
    <>
      <div>
        <div>
            <input type ="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
        </div>

        <div>
            <input type ="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
        </div>

        <div>
            <button onClick={oratalamaBul}>ortalama bul</button>
        </div>

      </div>
     
    </>
  )
}

export default App
