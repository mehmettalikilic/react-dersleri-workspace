import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()//ap component
{
 //javascript kodları buraya yazılır
//javascript kodları nı html etk etmesi için jsx kullanılır yani süslü parantez { } .
let a = 5;
let vize1 = 30;
let vize2 = 60;
let sonuc =true;
let isimler = ["Ahmet","Mehmet","Ayşe","Fatma"];

//ortalama değişkeni hesaplandı
const firstname = "Mehmet Ali";
  return (
    // html kodları buraya yazılır
    <div>
      {/* <p>{firstname} Kılıç {a}</p>
      <p>Not Ortalamanız: {(vize1 + vize2 )/2 } </p> */}
      {/* {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti almazsınız</p>} bu satırada sonuc=ture oparatörü uygulandı.ture ise : dan öndeki.fase ise :sonraki uygulanır */}

      {/* { (vize1 + vize2 )/2 >= 50 ? <p>  Dersten Geçtiniz</p> : <p>Dersten Kaldınız</p> } */}

      {/* {
        isimler.map( (isim,index) => (
           <div key={index}>{isim}</div>
        ))
      } */}

      {/* <div style={{backgroundColor: "red"}}>Mehmet Ali Kılıç</div>  burrda ilk açtığımız süsülü patentes jsx parntezi ikincisi ise css vermek için süsülü parantez */}

      
    </div>
  )
}

export default App//bu kod ile App componenti dışa aktarılır bu yazılmaz ise main.jsx dosyasından çağrılamaz,bu kodu yazmaya export etmek denir
