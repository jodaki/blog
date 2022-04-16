import React from 'react'
import {auth, provider} from '../firebase/firebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



export default function Login({setIsAuth}) {
  //for redairect in home after login
  let Navigate = useNavigate()


  const singInWithGoogle = () =>  {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true)
       localStorage.setItem('isAute',  true)
        alert('شما با موفقیت وارد شدید ')
       //redirect
       Navigate('/')
      }).catch((err) => {
      alert('there is a problame')
    });
  }


  
  return (
    <div>
        <h1 className='border-bottom pb-2'>login</h1>
        <p>login with google 
        </p>
        <p>are you login:{localStorage.getItem('isAute')}</p>
        <button className='btn btn-primary' onClick={singInWithGoogle}>Login With Google</button>
        

        
    </div>
  )
 
}
