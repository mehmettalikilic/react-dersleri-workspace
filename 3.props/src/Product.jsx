import React from 'react'

function Product(props) {
    
  return (
        <div>
            <div>Ürün Bilgileri</div>
            <hr />
            <div>
                <div>İsim: {props.productName}</div>
                <div>Fiyat: {props.price}</div>
                
            </div>
            
            
        </div>
  )
}

export default Product