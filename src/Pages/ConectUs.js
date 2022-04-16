import { async } from '@firebase/util'
import { addDoc, collection } from 'firebase/firestore'
import React,{useState} from 'react'
import { db } from '../firebase/firebaseConfig'

export default function ConectUs() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [massage, setmassage] = useState('')

    const ContactFireabse = collection(db, 'formsContact')
    const SubmitHolder = async(e) => {
        e.preventDefault()
        await addDoc(ContactFireabse,{
            name, 
            email,
            massage,
        }).then(() => {
            alert('massage issend')
         
            
            }).catch((err) => {
                alert('massage is not send')
            });
       
    } 


  return (
    <div className='container'>
        <h1>ContactUs</h1>
        <form className='border p-4' onSubmit={SubmitHolder}>
            <label type='text' className='form-lable'>Name</label>
                <input className='form-control' onChange={(e)=>{setname(e.target.value)}}></input>

            <label className='form-lable'>Email</label>
                <input type='email' className='form-control' onChange={(e)=>setemail(e.target.value)}></input>

            <label className='form-lable mb-2'>message</label>
                <textarea className='form-control' rows='6' onChange={(e)=>setmassage(e.target.value)}></textarea>

            <button className='btn btn-primary mt-2'>Submit</button>
        </form>
    </div>
  )
}
