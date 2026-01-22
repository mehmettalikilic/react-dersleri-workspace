import React from 'react'

function Container({ children }) {
  return (
    <div>
        <div>Container component çalıştı</div>
        {children}  

    </div>
  )
}

export default Container