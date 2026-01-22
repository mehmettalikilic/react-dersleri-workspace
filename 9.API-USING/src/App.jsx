import { useState } from 'react'
import './App.css'
import  axios  from 'axios'
import { useEffect } from 'react'

const BASE_URL = "http://localhost:3005"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    //POST :veri eklemek için kulanılır
    const response = await axios.post(BASE_URL + "/users", newUser);
    console.log(response.data)
  }

  const updateUser = async (userId, updatedUser) => {
    //PUT :veri güncellemek için kulanılır
    const response = await axios.put(BASE_URL + "/users/" + userId, updatedUser);
    console.log(response.data)
  }

  const deleteUser = async (userId) => {
    //DELETE :veri silmek için kulanılır
    const response = await axios.delete(BASE_URL + "/users/" + userId);
    console.log(response.data)
  }

  useEffect(() => {
    //getAllUsers();""
    //getUserById(2);
  //  const newUser = {
  //     "userName":"bilal",
  //     "password":"12345",
  // }
  // createUser(newUser);
  // }, [])

  //   updateUser(1, {
  //     "userName":"güncellenmiş bilal",
  //     "password":"54321",
  //   });
  // }, [])

    deleteUser(1);
  }, [])

  return (
   
   <div>

   </div>
  )
}

export default App
