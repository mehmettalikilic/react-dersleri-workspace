
// rfce yazıp tabe tuşunu bastığımısda otomatik olarak react function component yapısını oluşturur.

import React from 'react'
export const Users =[  
  
  {
    username:"admin",
   password:"1234"

   
  }

]
function Login() {
  console.log(Users);

  return (
    <div>
        <div>
          <p>kullanıcı adını giriniz</p>
          <input type="text" />
        </div>

        <div>
          <p>parolanızı giriniz</p>
          <input type="password" />
        </div>
        <button>giriş yap</button>


    </div>
  )
}

export default Login