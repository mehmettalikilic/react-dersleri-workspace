import React, { useState } from 'react'
import '../css/curruncy.css'
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';


let Base_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_VbGbro3FPycBieGHkFunNVIaHNjmMP6UHTwUA1Uv";
let EXCHANGE_API = `${Base_URL}?apikey=${API_KEY}`;

function Currency() { 
    const [amount, setAmount] = useState();
    const [fromCurruncy, setFromCurruncy] = useState('USD');
    const [toCurruncy, setToCurruncy] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange =  async() => {
      //  console.log(amount, fromCurruncy, toCurruncy);
     const response = await axios.get(`${Base_URL}?apikey=${API_KEY}&base_currency=${fromCurruncy}`)
     setResult(((response.data.data[toCurruncy])*amount).toFixed(2));
    }

    return (
        <div className='curruncy-div'>

            <div style={{ width:'100%', textAlign:'center', fontFamily:'arial', backgroundColor:'orange', color:'#fff', marginBottom: '20px'}}>
               <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            
            <div style={{marginTop: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <input value ={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount'/>
                
                <select onChange={(e) => setFromCurruncy(e.target.value)} className='from-curruncy-option' style={{marginLeft: '10px'}}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowCircleRight style={{ fontSize: '25px', marginRight: '10px', marginLeft: '10px', color: 'black' }}/>

                <select onChange={(e) => setToCurruncy(e.target.value)} className='to-curruncy-option' style={{marginRight: '10px'}}>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input value={result} type="number" className='result' readOnly /> 
            </div>

            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <button onClick={exchange} style={{padding: '10px 20px', cursor: 'pointer'}}>Çevir</button>
            </div>

        </div>
    )
}

export default Currency